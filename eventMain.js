//引入event模块
var events =require('events')
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter()

//创建事件处理程序
var connectHandler = function connected(){
    console.log('链接成功')//1
    eventEmitter.emit('data_received')
}
//绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function (){
    console.log('事件接受成功')//2
})
//触发connection
eventEmitter.emit('connection');

console.log('程序处理完毕')//3

// 链接成功
// 事件接受成功
// 程序处理完毕

