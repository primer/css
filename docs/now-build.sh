#!/bin/bash
pushd ..
npm install
npm run dist
popd
npm run build
