const express = require('express')

const app = express()

const fs = require('fs')

const bodyParser = require('body-parser')
const multer = require('multer')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({dest:'/tmp/'}).array('image'))


app.get('/upload.html', (req, res)=>{
    res.sendFile(__dirname + '/' + 'upload.html')
})

app.post('/file_upload', (req,res)=>{
    console.log(req.files[0])

    const des_file = __dirname + '/' + req.files[0].originalname;
    let response = {}
    fs.readFile(req.files[0].path, (err,data)=>{
        fs.writeFile(des_file,data,(err)=>{
            if(err){
                console.log(err)
            }else{
                 response={
                    message: '文件上传完成',
                    filename: req.files[0].originalname
                }
            }
            console.log(response)
            res.end(JSON.stringify(response))
        })
    })
})

const server = app.listen(8089,()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('访问地址http://%s:%s', host, port)
})