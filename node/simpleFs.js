// 简单文件写入
// 1.引入fs
const fs = require('fs')
    //2. fs.writeFile(path,data,{options},callback)
    //2.fs.writeFileSync(path,data,{options})
    // option的默认值{encoding:'utf8',mode:0o666,flag:'w'}
    // 覆盖
    // fs.writeFile('../hello2.txt', '这是writeFile写入的内容', err => {
    //     !err ? console.log('写入成功') : console.log('写入失败' + err);
    // })
    // 追加
fs.writeFile('../hello2.txt', '这是writeFile写入的内容', { flag: 'a' }, err => {
        !err ? console.log('写入成功') : console.log('写入失败' + err);
    })
    // 如果wx则是写操作，文件不存在会打开失败，不会自动创建
    // 如果是r+则是读写操作，也不会自动创建