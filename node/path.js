// 文件路径模块
let path = require('path')
let httpSrc = 'http://www.taobao.com/'
    // 获取路径信息的扩展名
let extname = path.extname(httpSrc)
console.log(extname);
// 路径拼接
let arr = ['/xuetang', 'login', 'zhongji']
let info1 = path.resolve(...arr)
console.log(info1);
// 获取当前目录的完整路径
// 一定要对数组解构赋值
let info2 = path.join(...['sxt', 'qianduan', 'zhongji'])
console.log(info2);
// 解析出请求目录
let httpSrc1 = 'http://baidu.com/robots.txt'
let http1 = httpSrc1.split('/')
console.log(http1);
// 解析路径，可以将路径信息直接解析出来,包括文件名，文件后缀，文件名+后缀名等
let src = '../node/'
console.log(path.parse(src));