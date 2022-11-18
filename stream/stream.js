//Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
// 该抽象接口是可读、可写或是既可读又可写的，
// 通过这些接口，我们可以和磁盘文件、套接字、HTTP请求来交互， 实现数据从一个地方流动到另一个地方的功能。
// Node.js，Stream有四种流类型：
//     Readable - 可读操作。
//     Writable - 可写操作。
//     Duplex - 可读可写操作
//     Transform - 操作被写入数据，然后读出结果。
//
// 所有的Stream对象都是EventEmitter的实例。常用的事件有：
//     data - 当有数据可读时触发。
//     end - 没有更多的数据可读时触发。
//     error - 在接收和写入过程中发生错误时触发。
//     finish - 所有数据已被写入到底层系统时触发。

// var fs = require('fs')
// var data = '啊啊啊'

// //创建可读性流
// var readerStream = fs.createReadStream('input.txt');
// // 使用 utf8 编码写入数据
// readerStream.setEncoding('UTF8')
// // 处理流事件 --> data, end, and error
// readerStream.on('data', (chunk) => {
//     data += chunk
// });
// readerStream.on('end', () => {
//     console.log(data)
// })
// readerStream.on('error', (err) => {
//     console.log(err.stack)
// })
//
// console.log("程序执行完毕");
//
// // 写入流
// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writeStream = fs.createWriteStream('output.txt')
// // 使用 utf8 编码写入数据
// writeStream.write(data,'UTF8')
// // 标记文件末尾
// writeStream.end()
//
// // 处理流事件 --> finish error
// writeStream.on('finish',()=>{console.log('写入成功')})
// writeStream.on('error',(error)=>{console.log(error.stack)})
// console.log("程序写入完毕");


//管道流 pipe
// var fs = require('fs')
// var readerStream1 = fs.createReadStream('input.txt');
// var writeStream1 = fs.createWriteStream('output1.txt')
//
// readerStream1.pipe(writeStream1)
// console.log('从可读到写入')
//

//链式流
// 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
// 接下来我们就是用管道和链式来压缩和解压文件。

//压缩
// var fs = require("fs");
// var zlib = require('zlib');
//
// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
//
// console.log("文件压缩完成。");

//解压
// var fs = require("fs");
// var zlib = require('zlib');
//
// // 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input1.txt'));
//
// console.log("文件解压完成。");

var fs = require('fs')
var zlib = require('zlib')


fs.createReadStream('TableCom')
    .pipe(zlib.createGunzip())
    .pipe(fs.createReadStream('TableCom.gunz'))
console.log('压缩完成')