/**
 * NOde.js是单线程应用程序，但是通过事件和回调支持并发，所以性能非常高
 * NOde.js的每一个API都是异步的， 并作为一个独立线程运行，使用异步函数调用，并处理并发
 * Node.js基本上所有的事件机制都是用设计模式中观察着模式实现
 * Node.js单线程类似进入一个while（true）的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数
 *
 * @type {Buffer} 事件驱动程序
 */


//事件驱动程序
// //引入事件
// var events = require('events')
// //创建 eventEmitter对象
// var eventEmitter = new events.EventEmitter()
// var eventHandler = function () {
//     console.log('绑定成功啦')
// }
// //on 两个参数 一个触发的事件名称  一个响应函数®®
// eventEmitter.on('eventName', eventHandler)
// //触发emit 绑定on
// eventEmitter.emit('eventName')

//Node 应用程序是如何工作的？
// var fs = require('fs')
// fs.readFile('input.txt', function (err,data){
//     if(err){//引入失败的时候报错
//         console.log(err.stack);
//         return
//     }
//     console.log(data.toString())
// })
// console.log('程序执行完毕')

/**
 * Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
 *
 * Node.js 里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。
 * 所有这些产生事件的对象都是 events.EventEmitter 的实例。 你可以通过require("events");来访问该模块。
 *
 * @type {Buffer} 事件
 */

// event 对象注册了事件 some_event 的一个监听器
// 通过 setTimeout 在1000毫秒以后向 event 对象发送事件 some_event，此时会调用 some_event 的监听器。
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter()
// event.on('some_event', function () {
//     console.log('some_event occured')
// })
// setTimeout(()=>{
//     event.emit('some_event')
// },1000)

// EventEmitter介绍
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。
// var events = require('events')
// var emitter = new events.EventEmitter();
// // EventEmitter 的每个事件由一个事件名和若干个参 数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// emitter.on('someEvent', function (arg1, arg2) {
//     console.log('listener1', arg1, arg2)
// })
// emitter.on('someEvent', (arg1, arg2) => {
//     console.log('listener2', arg1, arg2)
// })
// // 当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。
// emitter.emit('someEvent', 'by-void', 1991)

//EventEmitter常用的API
//- EventEmitter.on(event, listener)、emitter.addListener(event, listener) 为指定事件注册一个监听器，接收一个字符串 event 和一个回调函数 listener。
//- EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传 递若干可选参数到事件监听器的参数表。
//- EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
//- EventEmitter.removeListener(event, listener) 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器。
//- EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。

//EventEmitter 定义了一个特殊的事件 error
//EventEmitter 定义了一个特殊的事件 error，它包含了"错误"的语义，我们在遇到 异常的时候通常会发射 error 事件。
// 当 error 被发射时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。
// 我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃

// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.emit('error'); //会抛错

// 继承 EventEmitter
// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
//
// 为什么要这样做呢？原因有两点：
//
// 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
//
// 其次JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

/**
 *
 * Node.js 回调函数
 *  Node.js 异步编程的直接体现就是回调。
 *  异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
 *  回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
 *  例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
 *
 * 阻塞与非阻塞调用的不同
 *  阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
 * @type {Buffer} 回调函数
 */
// var fs = require('fs')
// //异步不带Sync
// var dataSync = fs.readFileSync('input.txt')
// console.log(dataSync.toString())
// console.log('引入异步结束')
// //同步带Sync
// fs.readFile('input.txt', function (err, dataSame){
//     console.log(dataSame.toString())
// })
// console.log('引入同步结束')

/**
 *  调用http模块提供的函数：createServer 。这个函数会返回 一个对象，
 *   这个对象有一个叫做listen的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。 调用http模块提供的函数：createServer 。这个函数会返回 一个对象，
 *
 * @type {Buffer}
 */

// var http = require("http") // 请求（require）Node.js自带的 http 模块，并且把它赋值给http变量。
// http.createServer(function (requset, response){
//     response.writeHead(200, {'content-Type':'text/plain'});
//     response.end('Hellssf') //网页上显示
// }).listen(8888)
//
// console.log('server running at http://127.0.0.1:8888/'); //node 终端中打印
//
// //npm adduser 或者 npm login 登陆 密码名字加出生年月+