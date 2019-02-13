#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'destinytaoer.cn' > CNAME

git push origin master # 提交到 master

git subtree push --prefix docs/.vuepress/dist origin gh-pages # 将 dist 文件提交到 gh-pages 分支

cd -