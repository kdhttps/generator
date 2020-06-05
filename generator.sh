#!/bin/sh

GITHUB_TOKEN=$1

cd dist/mdb-angular-free/
cp index.html 404.html

git init
git config user.name kdhttps
git config user.email kdhttps@gmail.com
git add -A
git commit -m 'deploy'

git push --set-upstream -f https://kdhttps:${GITHUB_TOKEN}@github.com/kdhttps/kdhttps.github.io.git master
