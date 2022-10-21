#!/bin/sh

# Import icons from BI and make them TS React components
echo 'Importing SVGs...'

npx svgr node_modules/bootstrap-italia/src/svg | tee src/Icon/assets/index.ts

echo 'Linting new components...'

npx eslint src/Icon/assets/*.ts* --fix

echo 'Reconfigure tests for new icons...'
# Find out what SVGs have no title tag and print them into a txt file used for testing
find node_modules/bootstrap-italia/src/svg -iname "*.svg" -exec grep -Li "title" {} + | xargs -L 1 basename > ./test/icons-with-no-title.txt
