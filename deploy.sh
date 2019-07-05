#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

cd dist

# 提交到历史区，$1 为运行 sh 时的第一个参数
git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:destinytaoer/destinytaoer.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:destinytaoer/blog.git master:gh-pages

cd -