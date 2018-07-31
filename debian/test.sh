#!/bin/sh

: "${SRCDIR:=./js/src}"
: "${DEB_HOST_ARCH:=$(dpkg --print-architecture)}"

if "$SRCDIR/js/src/js" -e 'print("Hello, world")'; then
	echo "Smoke-test successful, continuing with full test suite"
else
	echo "Smoke-test failed: did interpreter initialization fail? (see #873778)"
	exit 1
fi

if make -C "${SRCDIR}" -k check-jstests; then
	echo "check-jstests successful"
else
	echo "check-jstests failed, checking whether to continue anyway..."

	case "${DEB_HOST_ARCH}" in
		(kfreebsd-i386|kfreebsd-amd64)
			echo "Ignoring test failure, https://bugs.debian.org/878331"
			;;
		(mips64el)
			echo "Ignoring test failure, https://bugs.debian.org/877428"
			;;
		(ppc64el)
			echo "Ignoring test failure, https://bugs.debian.org/878319"
			;;
		(s390x|ppc64)
			echo "Ignoring test failure, https://bugs.debian.org/878286"
			;;
		(ia64)
			echo "Ignoring test failure, https://bugs.debian.org/897117"
			;;
		(m68k)
			echo "Ignoring test failure, see https://bugs.debian.org/903483"
			;;
		(*)
			echo "Test failure is considered serious, causing FTBFS"
			exit 1
	esac
fi
