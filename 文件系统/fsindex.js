// var fs = require('fs');
// fs.readFile('content.txt', {encoding: 'utf-8'},
//
//     function (err, data) {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(data);
//         }
//     }
// )

//Ï
// var fs = require('fs');
// fs.open('content.txt', 'r', function(err, fd) {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     var buf = new Buffer(8);
//     fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
//         if(err) {
//             console.error(err);
//             return;
//         }
//         console.log('bytesRead: ' + bytesRead);
//         console.log(buffer);
//     })
// });

var fs = require("fs");

// 异步读取
fs.readFile('content.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('content.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");