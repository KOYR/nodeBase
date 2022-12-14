var net = require('net')

var client = net.connect({port:7777}, function () {//创建net 创建端口7777的连接
    console.log(('连接到服务器2'))
})
client.on('data', (data)=>{ //接受index 传入的buffer信息
    console.log(data.toString()+6)
    client.end()
})

client.on('end',()=>{
    console.log('断开余服务器的连接7')
})