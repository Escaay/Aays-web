// 同步文件写入
// 先引入fs
const fs = require('fs')
    // 同步打开文件, 第二个参数r是只读,w是可写,第三个参数是文件操作权限,一般不传
const fd = fs.openSync('../hello.txt', 'w')
    // console.log(fd);输出3,是内存位置的意思,用这个来选取操作的文件
    //在hello.txt中写入内容(同步),第三个参数是写入的起始位置,每一次写入都会清空文件的原有内容再写入
fs.writeSync(fd, '这是写入hello.txt的内容', 20)
fs.close(fd)