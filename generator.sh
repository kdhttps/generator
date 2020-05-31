#!/bin/sh

node_modules/@angular/cli/bin/ng build --prod

cd dist/mdb-angular-free/

git init
git config user.name kdhttps
git config user.email kdhttps@gmail.com
git add -A
git commit -m 'deploy'

git push -f git@github.com-kd:kdhttps/kdhttps.github.io.git master

