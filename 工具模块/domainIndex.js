var EventEmitter = require('events').EventEmitter
var domain = require('domain')

var emitter1 = new EventEmitter()

//创建域
var domain1 = domain.create()
domain1.on('error',(err)=>{
    console.log(`domain1处理这个错误+++${err.message}`)
})

//显式绑定
domain1.add(emitter1)
emitter1.on('error',(err)=>{
    console.log(`监听器处理此错误+++${err.message}`)
})

// emitter1触发error优先被监听器处理
emitter1.emit('error',new Error('通过监听起来处理'))
emitter1.removeAllListeners('error') // 监听器移除监听error事件

// emitter1监听errpr 已被移除 触发domain1来处理
emitter1.emit('error',new Error('通过domain1处理'))

var domain2 = domain.create()

domain2.on('error',(err)=>{
    console.log(`domain2处理+++${err.message}`)
})

// 隐式绑定
domain2.run(()=>{
    var emitter2 = new EventEmitter()
    // emitter2.on('error',(err)=>{
    //     console.log(`监听器2处理此错误+++${err.message}`)
    // })
    // emitter2.removeAllListeners('error')
    emitter2.emit('error', new Error('通过domain2处理'))


})

// domain1.remove(emitter1)
//emitter1已经被移除绑定 再触发就会崩溃
// emitter1.emit('error', new Error('转换为异常，系统将崩溃!'))