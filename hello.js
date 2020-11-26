// Git基本操作
// git init,创建版本库
// git add 文件名（把文件添加到暂存区）
// git commit -m 说明（把文件添加到当前分支）
// git status,查看状态
// git diff,查看变化详情
console.log('第一次Git');

// Git时光穿梭

// git log,查看历史
// git log --pretty=oneline,简洁查看历史版本
// git reset --hard HEAD^,回退到历史版本，几个小三角就回退几个版本
// git reset --hard 版本id,回退到对应id的历史版本
// rm 文件名,工作区（本地）删除文件,工作区删了版本库的还在
// git rm 文件名+git commit -m 说明,版本库删除文件
// git checkout -- 文件名,找回误删文件（回到最近一次git add或者git commit的状态,git add优先）
console.log('第二次Git');

// Git分支管理
// 小结
// Git鼓励大量使用分支：

// 查看分支：git branch

// 创建分支：git branch <name>

// 切换分支：git checkout <name>或者git switch <name>

// 创建+切换分支：git checkout -b <name>或者git switch -c <name>

// 合并某分支到当前分支：git merge <name>（先切去合并后的分支）

// 删除分支：git branch -d <name>
console.log('第三次Git')
哈哈