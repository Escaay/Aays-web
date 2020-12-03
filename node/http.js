// 服务器模块
let http = require('http')
let fs = require('fs')
    // 创建一个http线程
http.createServer((req, res) => {
    // 响应头不是必须的
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    fs.readFile('../copy.png', (err, data) => {
        if (!err) {
            res.end(data)
        }
    })
}).listen(8888)
console.log('服务器已运行');