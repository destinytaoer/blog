#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 发布到自定义域名
cd ./dist
echo 'destinytaoer.cn' > CNAME

# 提交到历史区，$1 为运行 sh 时的第一个参数
git add -A
git commit -m $1

# 将 dist 文件提交到 gh-pages 分支
# git subtree push --prefix dist origin gh-pages 
git subtree split --rejoin --prefix dist --branch gh-pages

# 提交到 master
git push origin gh-pages:gh-pages

git push origin master:master

cd -

exit 0