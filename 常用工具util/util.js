// util是Node的一个核心模块 能够提供常用函数的集合，弥补核心javaScript的功能过于精简的不足

// js的面向对象特性是基于原型的，js没有提供对象集成的语言级别特性，而是通过复制原型来实现的


var util = require('util')

///util.inherits 继承
// function Base() {
//     this.name = 'base'
//     this.base = 1991
//     this.sayHello = function () {
//         console.log('sayHello ' + this.name);
//     }
// }
//
// Base.prototype.showName = function () {
//     console.log(this.name)
// }
//
// function Sub(){
//     this.name = 'sub'
// }
//
// util.inherits(Sub, Base)
//
// var objBase = new Base()
// objBase.showName()
// objBase.sayHello()
// console.log(objBase) //Base { name: 'base', base: 1991, sayHello: [Function] }
//
//
// var objSub = new Sub()
// objSub.showName()
// console.log(objSub)//Sub { name: 'sub' }

//util.inspect 方法可以将任意对象转换为字符串，通常用于调试和错误输出。它至少接受一个object参数，即要转换的对象。
// function Person(){
//     this.name = 'hhh'
//     this.toString = function () {
//         return this.name
//     }
// }
//
// var obj = new Person()
// console.log(util.inspect(obj))
// console.log(util.inspect(obj,true))
// console.log(obj.toString())

