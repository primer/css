#!/bin/bash -e
npm run dist
cp -rf dist docs
cd docs
npm install
npm run build
