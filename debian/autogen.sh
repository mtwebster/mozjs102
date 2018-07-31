#!/bin/sh

set -e
set -x

autoconf2.13 old-configure.in > old-configure
autoconf2.13 configure.in > configure
( cd ../../intl/icu/source; autoreconf -fi --verbose )
