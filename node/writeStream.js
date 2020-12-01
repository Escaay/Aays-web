var os = require("os");
// 流式文件写入
// 同步，异步，简单文件写入都不适合大文件的写入，容易导致内存溢出
const fs = require('fs')
    // 创建一个可写流
    // fs.creatWriteStream(path,{options})
    // 用一个变量接收这个可写流,记得文件流里面的打开状态是用flags而不是flag
const ws = fs.createWriteStream('../hello3.txt', { flags: 'a' })
    // 通过ws向文件中输出内容，就像两个水缸用导管源源不断的输水，不容易溢出
    // ws.write(data),这个默认也是截断，可以设置options里面的flag为a来追加
ws.write('这是异步流式文件写入' + os.EOL)
ws.write('这是异步流式文件写入' + os.EOL)
ws.write('这是异步流式文件写入' + os.EOL)
    // 不能用ws.close()，它会导致只write只能输入一次（流也是异步的），比喻成要拔水管的另一头，只要水进入了水管就鞥传输
ws.end()
    // addListener是用于鼠标，键盘等特殊元素的一些监听
    // addEventListener是对组件监听的
    // 对流的打开和关闭进行监听
ws.once('open', () => {
        console.log('流打开了');
    })
    // 下面不能监听end,只能监听close,end监听不到
ws.on('close', () => {
    console.log('流关闭了');
})