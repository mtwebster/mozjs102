#!/bin/sh

set -e
set -x

autoconf2.13 old-configure.in > old-configure
( cd ../../intl/icu/source; autoreconf -fi --verbose )
