// console.log(process)

process.stdin.resume()
process.stdin.on('data', function (data) {
    process.stdout.write('read from console;' + data.toString())
})


//nextTick
// function doSomething(args, callback){
//     sonmethingComplicated(args)
//     callback()
// }
// doSomething(function End(){
//     compute()
// })
//
// function doSomething(args, callback) {
//     sonmethingComplicated(args)
//     process.nextTick(callback) // 将End函数拆出来成为另外一个事件 使用process.nextTick的效率比setTimeout的效率高的多
// }
//
// doSomething(function End() {
//     compute()
// })

console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);//%d

console.trace();