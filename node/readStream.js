// 流式文件读取也适用于一些大文件，可以分多次将文件读取到内存中
let fs = require('fs')
    // 为一个文件绑定可读流分多次读取它
let rs = fs.createReadStream('../copy.png')
    // 监听流的开启和关闭
rs.once('open', () => {
    console.log('可读流打开了');
})
rs.once('close', () => {
        console.log('可读流关闭了');
    })
    // 要读取一个可读流中的数据，必须为可读流绑定一个事件字符串为data事件，data事件绑定完毕，它会自动开始读取数据
rs.on('data', (data) => {
        // 输出了9次data，说明分了9次读取这个文件,每一次读取的文件内容就在data里面
        // 每一次最大读取65536字节
        console.log(data.length);
        console.log(data);
    })
    // 再绑定一个可写流，把读到的数据传过去
let ws = fs.createWriteStream('../copy1.png')
    // 监听流的开启和关闭
ws.once('open', () => {
    console.log('可写流打开了');
})
ws.once('close', () => {
        console.log('可写流关闭了');
    })
    // 可读流.pipe(可写流)，这个方法能帮我们直接把可读流的数据传输到可写流里面(自动关闭可写流)，不用自己再写方法
rs.pipe(ws)
    // 浏览器，客户端，服务器之间的请求，响应，在底层其实都是通过这些流(水管)来完成数据的交互和显示，我们自己写的时候反倒用的不是那么多