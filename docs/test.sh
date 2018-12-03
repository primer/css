#!/bin/bash
set -e
cwd=`pwd`

if [[ ! -e before.txt ]]; then
    pushd ../../../github/styleguide/src/_primer > /dev/null
    find . -name '*.md' > $cwd/before.txt
    popd > /dev/null
fi

pushd pages/css > /dev/null
find . -name '*.md' > $cwd/after.txt
popd > /dev/null

diff before.txt after.txt
