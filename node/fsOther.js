let fs = require('fs')
    // 检测某个文件是否存在，这个方法没有异步，因为马上就要知道结果
    // fs.existsSync(path)
let isExists = fs.existsSync('fs.js')
console.log(isExists);

// 检测文件状态
// fs.stat(path,callback(err,stat))
// fs.statSync(path)
fs.stat('../copy.png', (err, stat) => {
    console.log(stat.isDirectory());
    // stat返回的对象中，size是文件大小，isFile()是否为文件，isDirectory()是否是文件夹(目录)
})

//删除文件
// fs.unlinkSync(path),fs.unlink(path,callback)
// 读取一个目录的目录结构

// fs.readdir(path,{options},callback(err,files)),fs.readdirSync(path,{options})
fs.readdir('.', (err, files) => {
    !err ? console.log(files) : console.log(err);
})

// 截断文件，将文件设定为指定字节的文件
// fs.truncate(path,len,callback)
// fs.truncate(path,len)

//创建目录
//fs.makedir(path,{mode},callback)
//fs.makedirSync(path,{mode}) 

// 删除目录
//fs.rmdir(path,callback)
//fs.rmdirSync(path)

//重命名文件或者目录(可以用来移动文件或者目录)
//fs.rename(oldPath,newPath,callback)
// fs.renameSync(oldPath,newPath)

// 监视文件的修改(文件被修改时触发回调函数,第一个参数是修改前状态，第二个是修改后状态)
// fs.watchFile(path,{options},callback(cur,pre)),只要进行保存操作就会触发回调函数，不管是否被修改，消耗系统性能
这个方法的options里面设置interval可以设置每次检查保存操作的时间间隔
fs.watchFile('../hello1.txt', { interval: 1000 }, (curr, prev) => {
    console.log('文件已被修改');
    console.log(curr, prev);
})