#!/bin/bash -e

# Build the base project so we can pull out the JSON data
cd ..
npm ci
npm run dist
cp -rf dist docs

# Now build the docs site using that data
cd docs
npm ci
CI=true npm run build-content
