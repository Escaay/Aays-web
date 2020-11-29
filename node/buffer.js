// buffer不用引入直接使用
// 创建一个指定大小的缓冲区
const buf = Buffer.alloc(10)
buf[0] = 11
buf[1] = 12
buf[2] = 0xaa
    //这里是十进制的，控制台里面输出的buffer是十六进制的
console.log(buf);
for (i = 0; i < buf.length; i++) {
    console.log(buf[i]);
}
// 下面这个buffer里面可能含有敏感数据，因为这个内存创建语法创建内存之前不会清空内存里面的原有内容，但是它性能比较好
const buf1 = Buffer.allocUnsafe(20)
console.log(buf1);