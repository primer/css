#!/bin/bash
set -e
cwd=`pwd`

if [[ ! -e before.txt ]]; then
    pushd ../../../github/styleguide/src/_primer > /dev/null
    find . -name '*.md' | sort -u > $cwd/tmp.txt
    popd > /dev/null
    pushd ../../../github/styleguide/src/primer > /dev/null
    find . -name '*.md' | sort -u >> $cwd/tmp.txt
    popd > /dev/null
    cat tmp.txt | sort -u > before.txt
    rm tmp.txt
fi

pushd pages/css > /dev/null
find . -name '*.md' | sort -u > $cwd/after.txt
popd > /dev/null

diff before.txt after.txt || {
  echo "There was a diff, but it's probably not a big deal?"
}
