/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * vim: set ts=8 sts=2 et sw=2 tw=80:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef jit_StructuredSpewer_h
#define jit_StructuredSpewer_h

#ifdef JS_STRUCTURED_SPEW

#  include "mozilla/Atomics.h"
#  include "mozilla/Attributes.h"
#  include "mozilla/EnumeratedArray.h"
#  include "mozilla/EnumSet.h"
#  include "mozilla/Maybe.h"
#  include "mozilla/Sprintf.h"

#  include "jstypes.h"
#  include "vm/JSONPrinter.h"
#  include "vm/Printer.h"

#  ifdef XP_WIN
#    include <process.h>
#    define getpid _getpid
#  else
#    include <unistd.h>
#  endif

// [SMDOC] JSON Structured Spewer
//
// This spewer design has two goals:
//
//   1. Provide a spew mechanism that has first-class support for slicing and
//      dicing output. This means that filtering by script and channel should be
//      the dominant output mechanism.
//   2. Provide a simple powerful mechanism for getting information out of the
//      compiler and into tools. I'm inspired by tools like CacheIR analyzer,
//      IR Hydra, and the upcoming tracelogger integration into
//      profiler.firefox.com.
//
// The spewer has four main control knobs, all currently set as
// environment variables. All but the first are optional.
//
//   SPEW: Activates the spewer. The value provided is interpreted as a comma
//         separated list that selects channels by name. Currently there's no
//         mapping between internal and external names, so the channel names
//         are exactly those described in STRUCTURED_CHANNEL_LIST below.
//
//   SPEW_FILE: Selects the file to write to. An absolute path.
//
//   SPEW_FILTER: A string which is matched against 'signature' constructed or a
//        JSScript, currently connsisting of filename:line:col.
//
//        Matching in this version is merely finding the string in
//        in question in the 'signature'
//
//   SPEW_UPLOAD: If this variable is set as well as MOZ_UPLOAD_DIR, output goes
//        to $MOZ_UPLOAD_DIR/spew_output* to ease usage with Treeherder.
//
// Other notes:
// - Thread safety is provided by opening a new spewer file for every thread.
// - Each file is prefixed with the PID to handle multiple processes.
// - Files are opened lazily, just before the first write to them.

class JS_PUBLIC_API JSScript;

namespace js {

#  define STRUCTURED_CHANNEL_LIST(_) _(BaselineICStats)

// Structured spew channels
enum class SpewChannel {
#  define STRUCTURED_CHANNEL(name) name,
  STRUCTURED_CHANNEL_LIST(STRUCTURED_CHANNEL)
#  undef STRUCTURED_CHANNEL
      Count
};

// A filter is used to select what channels are enabled
//
// To save memory, JSScripts do not have their own filters, but instead have
// a single bit which tracks if that script has opted into spewing.
class StructuredSpewFilter {
  // Packed set of bits indicating what spew channels
  // are enabled.
  mozilla::EnumSet<SpewChannel> bits_;

 public:
  // Default construct to all bits disabled.
  StructuredSpewFilter() : bits_() {}

  // Return true iff spew is enabled for this channel for
  // the script this was created for.
  bool enabled(SpewChannel x) const { return bits_.contains(x); }

  void enableChannel(SpewChannel x) { bits_ += x; }

  void disableAll() { bits_.clear(); }
};

class StructuredSpewer {
 public:
  StructuredSpewer()
      : outputInitializationAttempted_(false),
        json_(mozilla::Nothing()),
        selectedChannels_() {
    // If we are recording or replaying, we cannot use getenv
    if (mozilla::recordreplay::IsRecordingOrReplaying()) {
      return;
    }
    if (getenv("SPEW")) {
      parseSpewFlags(getenv("SPEW"));
    }
  }

  ~StructuredSpewer() {
    if (json_.isSome()) {
      json_->endList();
      output_.flush();
      output_.finish();
    }
  }

  // Check if the spewer is enabled for a particular script, used to power
  // script level filtering.
  static bool enabled(JSScript* script);

  // A generic printf like spewer that logs the formatted string.
  static void spew(JSContext* cx, SpewChannel channel, const char* fmt, ...)
      MOZ_FORMAT_PRINTF(3, 4);

 private:
  // In order to support lazy initialization, and simultaneously support a
  // failure to open a log file being non-fatal (as lazily reporting failure
  // would be hard, we have an akward set of states to represent.
  //
  // We need to handle:
  // - Output file not initialized, and not yet attempted
  // - Output file not intialized, attempted, and failed.
  // - Output file initialized, JSON writer ready for input.
  //
  // Because Fprinter doesn't record whether or not its initialization was
  // attempted, we keep track of that here.
  //
  // The contract we require is that ensureInitializationAttempted() be called
  // just before any attempte to write. This will ensure the file open is
  // attemped in the right place.
  bool outputInitializationAttempted_;

  Fprinter output_;
  mozilla::Maybe<JSONPrinter> json_;

  // Globally selected channels.
  StructuredSpewFilter selectedChannels_;

  using NameArray =
      mozilla::EnumeratedArray<SpewChannel, SpewChannel::Count, const char*>;
  // Channel Names
  static NameArray const names_;

  // Return the global filter.
  StructuredSpewFilter& filter() { return selectedChannels_; }

  // Get channel name
  static const char* getName(SpewChannel channel) { return names_[channel]; }

  // Call just before writes to the output are expected.
  //
  // Avoids opening files that will remain empty
  //
  // Returns true iff we are able to write now.
  bool ensureInitializationAttempted();

  void tryToInitializeOutput(const char* path);

  // Using flags, choose the enabled channels for this spewer.
  void parseSpewFlags(const char* flags);

  // Returns true iff the channels is enabled for the given script.
  bool enabled(JSContext* cx, const JSScript* script,
               SpewChannel channel) const;

  // Start a record
  void startObject(JSContext* cx, const JSScript* script, SpewChannel channel);

  friend class AutoStructuredSpewer;
};

// An RAII class for accessing the structured spewer.
//
// This class prefixes the spew with channel and location information.
//
// Before writing with this Spewer, it must be checked: ie.
//
//     {
//       AutoSpew x(...);
//       if (x) {
//          x->property("lalala", y);
//       }
//     }
//
// As the selected channel may not be enabled.
//
// Note: If the lifespan of two AutoSpewers overlap, then the output
//  may not be well defined JSON. These spewers should be given as
//  short a lifespan as possible.
//
//  As well, this class cannot be copied or assigned to ensure the
//  correct number of destructors fire.
class MOZ_RAII AutoStructuredSpewer {
  mozilla::Maybe<JSONPrinter*> printer_;
  AutoStructuredSpewer(const AutoStructuredSpewer&) = delete;
  void operator=(AutoStructuredSpewer&) = delete;

 public:
  explicit AutoStructuredSpewer(JSContext* cx, SpewChannel channel,
                                JSScript* script);

  ~AutoStructuredSpewer() {
    if (printer_.isSome()) {
      printer_.ref()->endObject();
    }
  }

  explicit operator bool() const { return printer_.isSome(); }

  JSONPrinter* operator->() {
    MOZ_ASSERT(printer_.isSome());
    return printer_.ref();
  }

  JSONPrinter& operator*() {
    MOZ_ASSERT(printer_.isSome());
    return *printer_.ref();
  }
};

}  // namespace js

#endif
#endif /* jit_StructuredSpewer_h */
