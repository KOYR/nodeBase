var express = require('express')
var app = express()
var fs = require('fs')

app.get('/listUsers', (req, res)=>{
    fs.readFile(__dirname + '/' + 'user.json','utf-8', (err,data)=>{
        console.log(data)
        res.end(data)
    })
})

var server = app.listen(8081, ()=>{
    var host = server.address().address
    var port = server.address().port
    console.log('应用实例访问地址为http://%s:%s',host, port)
})