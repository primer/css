#!/bin/bash -e

# Build the base project so we can pull out the JSON data
cd ..
yarn
yarn dist
cp -rf dist docs

# Now build the docs site using that data
cd docs
yarn
CI=true yarn build-content
