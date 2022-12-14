var net = require('net');
var server = net.createServer(function (connection) {
    console.log('client connected3');
    connection.on('end', function () {
        console.log('客户端关闭连接4');
    });
    connection.write('Hello World!5\r\n');// 在socket上发送数据 传给clinet
    connection.pipe(connection);
});
server.listen(7777, function () {
    console.log('server is listening1'); // 监听7777
});