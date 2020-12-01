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
    // 其实writeFile是由write封装来的方法，不过在内部实现了
    // 记得下面是flag不是flags，在流里面才是flags
fs.writeFile('../hello2.txt', '这是writeFile写入的内容', { flag: 'a' }, err => {
        !err ? console.log('写入成功') : console.log('写入失败' + err);
    })
    // 如果wx则是写操作，文件不存在会打开失败，不会自动创建
    // 如果是r+则是读写操作，也不会自动创建
    // 以上的读写操作，Node.js将文件内容视为一个整体，为其分配缓存区并且一次性将文件内容读取到缓存区中，
    // 在这个期间，Node.js将不能执行任何其他处理。所以当读写大文件的时候，有可能造成缓存区“爆仓”