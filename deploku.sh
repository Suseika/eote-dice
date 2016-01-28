#!/bin/bash
# Deploys current content of master branch to heroku
git checkout -b include_css
git rebase master
sass public/stylesheets/style.sass --update
git add public/stylesheets/style.css
git add public/stylesheets/style.css.map
git commit --amend -m "Add stylesheets"
git push -f heroku include_css:master
