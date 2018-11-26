#!/bin/sh
set -e
cwd=`pwd`

pushd ../../../github/styleguide/src/_primer > /dev/null
find . -name '*.md' > $cwd/before.txt
popd > /dev/null

pushd pages/css > /dev/null
find . -name '*.md' > $cwd/after.txt
popd > /dev/null

diff before.txt after.txt
