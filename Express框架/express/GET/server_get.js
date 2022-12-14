var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser =  bodyParser.urlencoded({ extended: false })

app.use(express.static('../public'))

app.get('/index.html', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})


app.post('/process_post', urlencodedParser, (req, res) => {
    console.log(req.body, 'req')
    response = {
        first_name: req.body.first_name_post,
        last_name: req.body.last_name_post
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(8088, () => {
    var host = server.address().address
    var port = server.address().port
    console.log('实力———————— 访问地址为http://%s:%s', host, port)
})