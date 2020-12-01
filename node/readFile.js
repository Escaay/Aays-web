// 同步文件读取
// 异步文件读取
// 上述两者参考同步写和异步写，语法基本一致
// 简单文件读取
// fs.readFile(path,{options},callback（err,data))，通过回调函数的参数获取内容
// const xx=fs.readFile(path,{options}),通过返回值获取内容
const fs = require('fs')
    // fs.readFile('../hello4.txt', (err, data) => {
    //     // 返回的是十六进制的数据，原因是这样可以读取不限于文本的数据，包括图片音频等
    //     console.log(data);
    //     // 用toString把它转化为我们要的字符串类型
    //     console.log(data.toString());
    // })
    // 路径不能用反斜杠
fs.readFile('C:/Users/27907/Desktop/nodeJS学习记录/nodejs文件打开状态.png', (err, data) => {
    console.log(data);
    // 把图片写入到另外一个文件
    fs.writeFile('../copy.png', data, err => {
        console.log('图片复制完成');
    })
})