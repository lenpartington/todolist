#!/bin/bash

echo "Remove all JS/JSMAP files locally..." ;

find . -name '.DS_Store' -type f -delete ;
find ./app/ -name '*.js' -type f -delete ;
find ./app/ -name '*.js.map' -type f -delete ;
chmod -R 777 . ;

echo "End." ;
echo ;
