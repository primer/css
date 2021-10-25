#!/bin/bash

# Add base url to be able to serve static files
echo '<base href="/css/storybook/" />' >> .storybook/manager-head.html

# Build storybook inside docs
./node_modules/.bin/build-storybook -o public/storybook -s public/static

# Remove manager-head after build to not interfere with dev builds
rm .storybook/manager-head.html
