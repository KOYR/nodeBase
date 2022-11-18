/**
 * Buffer 类是用来处理二进制数据，因为太常用了，所以直接放在了全局变量里，使用的时候无需 require。
 *
 * Buffer.from(array)：返回一个内容包含所提供的字节副本的 Buffer，数组中每一项是一个表示八位字节的数字，所以值必须在 0 ~ 255 之间，否则会取模
 * Buffer.from(arrayBuffer)：返回一个与给定的 ArrayBuffer 共享内存的新 Buffer
 * Buffer.from(buffer)：返回给定 Buffer 的一个副本 Buffer
 * Buffer.from(string [, encoding])：返回一个包含给定字符串的 Buffer
 * Buffer.alloc(size [, fill [, encoding]])：返回指定大小并且“已填充”的 Buffer
 * Buffer.allocUnsafe(size)：返回指定大小的 Buffer，内容必须用 buf.fill(0) 等方法填充
 *  allocUnsafe的执行会快于  alloc看名字很不安全，确实也不安全。
 *  当调用allocUnsafe的执行会快于时分配的内存段尚未初始化（不归零），这样分配内存速度很块，但分配到的内存片段可能包含旧数据。
 *  如果在使用allocUnsafe的时候不覆盖这些旧数据就可能造成内存泄露，虽然速度快，尽量避免使用。
 *
 * Buffer.isBuffer：判断对象是否为 Buffer
 * Buffer.isEncoding：判断 Buffer 对象编码
 *
 *
 * buf.length：返回 内存为此 Buffer 实例所申请的字节数，并不是 Buffer 实例内容的字节数
 * buf.indexOf：和数组的 indexOf 类似，返回某字符串、acsii 码或者 buf 在改 buf 中的位置
 * buf.copy：将一个 buf 的（部分）内容复制到另外一个 buf 中
 * buf.toString: 读取数据
 * buf.toJSON: 转换为JSON对象
 * buf.compare: 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
 *
 * @type {Buffer}
 */

//创建 Buffer 类
var buf0 = new Buffer(10)
console.log(buf0, 'buf')

var buf1 = new Buffer([10, 20, 30, 40, 50])
console.log(buf1, 'buf1')

var buf2 = new Buffer('abcwww', 'utf-8')
console.log(buf2, 'buf2')

//写入缓冲区
var buf = new Buffer(4)
len = buf.write('一')
len1 = buf.write('一二三四')
console.log(len, '写入的字节数: ' + len, len1, '最大字节数: ' + len1, '非12 而是buf中限制的6')

// 在node中一个汉字占三3个字节 换行符占两个字节
var str = Buffer.from('aaaa')
// str1 = str.write('a', 2, 24, "utf-8")
str1 = str.write('EE', 1, 1, 'utf-8')
console.log(str1, str, str.toString(), '四个参数')


//从缓冲区读取数据
buf = new Buffer(26)
//小写英文字母
for (let i = 0; i < 26; i++) {
    buf[i] = i + 97
}
console.log(buf.toString('ascii'))
//将 Buffer 转换为 JSON 对象
console.log(buf.toJSON(), 's')


//缓冲区合并
var buffer1 = new Buffer('bf1 ');
var buffer2 = new Buffer('bf2');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


//缓冲区比较compare
var result = buffer1.compare(buffer2);
console.log(result, '----result')
if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result === 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}


//拷贝缓冲区
var bf1 = new Buffer('ABC');
// 拷贝一个缓冲区
var bf2 = new Buffer(3);
bf1.copy(bf2); //bf2拷贝buffer1Ï
console.log("buffer2 content: " + bf2.toString());


//缓冲区裁剪
var buff1 = new Buffer('youj');
// 剪切缓冲区
var buff2 = buff1.slice(0,2);
console.log("buffer2 content: " + buff2.toString());