const express = require('express')

const app = express()
const fs = require('fs')

const user = {
    'user4': {
        name: 'user4',
        password: 'password4',
        profession: 'pro4',
        id: 4
    }
}
//新增
app.get('/addUser', (req, res) => {
    fs.readFile(__dirname + '/' + 'user.json', 'utf-8', (err, data) => {
        data = JSON.parse(data)
        data['user4'] = user['user4']
        console.log(data)
        res.end(JSON.stringify(data))

    })
})

//查找
app.get('/:id', (req, res) => {
    fs.readFile(`${__dirname}/user.json`, 'utf-8', (err, data) => {
        data = JSON.parse(data)
        const user = data[`user${req.params.id}`]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

//删除
app.get('/deleteUser/:id', (req, res) => {
    fs.readFile(`${__dirname}/user.json`, 'utf-8', (err, data) => {
        data = JSON.parse(data)
        const id = req.params.id
        delete data[`user${id}`]
        console.log(data, id)
        res.end(JSON.stringify(data))
    })
})

const server = app.listen(8082, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('实例访问 http://%s:$s', host, port)
})