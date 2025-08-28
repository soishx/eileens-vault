#!/bin/bash
# 一键更新脚本：提交并推送到 GitHub，同时可本地预览

# 让用户输入 commit 信息
echo "请输入 commit 信息: "
read commit_msg

# 添加所有改动
git add .

# 提交
git commit -m "$commit_msg"

# 推送到 GitHub
git push

# 可选：本地构建并预览
echo "是否要本地预览？(y/n)"
read preview
if [ "$preview" = "y" ]; then
    npx quartz build --serve
fi
