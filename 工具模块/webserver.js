// Client 客户端 一般指浏览器， 浏览器可以通过HTTP协议向服务器请求数据
// Server 服务端 一般指Web服务器， 可以接受客户端请求，并向客户端发送响应数据
// Business 业务层 通过Web服务器处理应用程序, 如与数据库交互,逻辑运算，调用外部程序等
// Data 数据层 一般由数据库组成

var http = require('http')
var fs = require('fs')
var url = require('url')

//创建服务器
http.createServer(function (req, res) {
    //     // 解析请求，包括文件名
    var pathname = url.parse(req.url).pathname
    console.log('Request for' + pathname + 'received')
    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substring(1), (err, data) => {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});
            // 响应文件内容
            res.write(data.toString());
        }
        //发送相应数据
        res.end()
    })
}).listen(8081)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
