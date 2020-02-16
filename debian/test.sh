#!/bin/sh

: "${SRCDIR:=./js/src}"
: "${BUILDDIR:=./debian/build}"
: "${DEB_HOST_ARCH:=$(dpkg --print-architecture)}"

if "$BUILDDIR/js/src/js" -e 'print("Hello, world")'; then
	echo "Smoke-test successful, continuing with full test suite"
else
	echo "Smoke-test failed: did interpreter initialization fail? (see #873778)"
	exit 1
fi

export HOME="$(mktemp -d -t mozjs-tests-home-XXXXXXXXXX)"

if make -C "${BUILDDIR}" -k check-jstests; then
	echo "check-jstests successful"
else
	echo "check-jstests failed"
	exit 1
fi
