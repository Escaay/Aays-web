// 异步写入文件
const fs = require('fs')
    // 在nodejs中有错误优先的思想，所以每个回调函数第一个参数错误函数（不一定命名为err）错误时执行它
fs.open('../hello1.txt', 'w', (err, fd) => {
        // open中第二个参数fd就是打开的文件的唯一标识
        !err ? (console.log('文件打开成功')) : console.log('出错了');
        fs.write(fd, '这是异步写入的内容', (err) => {
            if (!err) {
                console.log('文件写入完成');
            }
            fs.close(fd, (err) => {
                // 每一次回调都要判断是否有错误，错误优先
                if (!err) {
                    console.log('文件关闭完成');
                } else {
                    console.log(err);
                }
            })
        })
    })
    // write或writeSync方法写入内容时，node.js执行以下过程：1.将需要写入的数据写入到一个内存缓存区；
    // 2.待缓存区写满后再将缓存区中的内容写入到文件中；3重复执行步骤1和步骤2，知道数据全部写入文件为止。
    // 上面不能用一个const fd=fs.open ,因为它没有返回值，有返回值的一定是同步的操作
    // 异步操作会放到线程池里面等下面的代码都执行完了才执行
console.log('在下面的代码却会先执行，这是因为nodejs是异步的，不会阻塞程序');