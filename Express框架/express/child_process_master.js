const fs = require('fs')
const child_process = require('child_process')
// for (let i = 0; i < 3; i++) {
//     const workerProcess = child_process.exec('node child_process_support.js ' + i, (err, stdout, stderr) => {
//         if (err) {
//             console.log(err.stack)
//             console.log('Error code： ', err.code)
//             console.log('Signal received： ', err.signal)
//         }
//         console.log('stdout： ' + stdout)
//         console.log('stderr： ' + stderr)
//     })
//
//     workerProcess.on('exit', (code) => {
//         console.log('子进程已退出， 退出码' + i + code)
//     })
// }


// const fs = require('fs');
// const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("child_process_support.js", [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}