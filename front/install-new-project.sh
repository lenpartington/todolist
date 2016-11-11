#!/bin/bash

echo "Step 0 : Check NodeJS, NPM, Git, Gulp, etc. is installed !" ;
echo ;

echo "Step 1 : Create the 4 config files (package.json, tsconfig.json, typings.json, systemjs.config.js)" ;
echo ;

echo "Step 2 : Install packages with NPM" ;
sudo npm install -g npm ;
sudo npm install ;
npm run typings install ;

echo "End." ;
