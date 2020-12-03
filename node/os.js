// 系统模块(一般是运维才用)
let os = require('os')
    // 获取系统cpu信息
console.log(os.cpus());
// 获取内存信息
console.log(os.totalmem());
// 查看系统架构
console.log(os.arch());
// 查看内存剩余量
console.log(os.freemem());
// 查看系统平台
console.log(os.platform());