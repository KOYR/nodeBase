var express = require('express')

var app = express()
app.get('/', (req, res)=>{
    console.log('主页get请求')
    res.send('Hello GET')
})

app.post('/',(req, res)=>{
    console.log('主页POST')
    res.send('POST---')
})

app.delete('/delete_user', (req, res)=>{
    console.log('/delete_user DELETE')
    res.send('删除页面')
})

app.get('/list_user', (req, res)=>{
    console.log('/list_user GET')
    res.send('用户列表页面')
})

app.get('/ab*cd',(req,res)=>{
    console.log('/ab*cd GET请求')
    res.send('正则匹配')
})

var server = app.listen(8082, ()=>{
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})