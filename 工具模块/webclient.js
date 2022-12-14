//创建web 客户端
var http = require('http')

//用于请求的选项
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'

    // host: 'localhost',
    // port: '3500', //xf-ent端口
}

// 处理相应的毁掉函数
var callback = function (res) {
    //不断更新数据
    var body = ''

    res.on('data', (data) => {
        body += data
    })
    res.on('end',()=>{
        //数据接受完成
        console.log(body)
    })
}

//想服务端发送请求
var req = http.request(options, callback)
req.end()