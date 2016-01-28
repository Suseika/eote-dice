#!/bin/bash
# Deploys current content of master branch to heroku
git checkout -B include_css
git rebase master
sass public/stylesheets/style.sass --update
git add -f public/stylesheets/style.css
git add -f public/stylesheets/style.css.map
git commit --amend -m "Add stylesheets"
git push -f heroku include_css:master
git checkout master
git branch -D include_css
