var os = require('os')


console.log(os,'os')

//OS得方法
console.log('CPU得字节序endianness ---- ' + os.endianness())
console.log('操作系统的主机名hostname ---- ' + os.hostname())
console.log('操作系统名type ---- ' + os.type())
console.log('操作系统名platform ---- ' + os.platform())
console.log('操作系统的CPU架构arch ---- ' + os.arch())
console.log('操作系统的发行版本release ---- ' + os.release())
console.log('操作系统运行的时间，以秒为单位。uptime ---- ' + os.uptime())
console.log('返回一个包含 1、5、15 分钟平均负载的数组。loadavg ---- ' + os.loadavg())

console.log('系统内存总量，单位为字节。totalmem ---- ' + os.totalmem() + " bytes.");
console.log('操作系统空闲内存量，单位是字节。freemem ---- ' + os.freemem() + " bytes.");
console.log('一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间\n' +
    '（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。cpus ---- ' + os.cpus())
console.log('操作系统的发行时间networkInterfaces ---- ' + os.networkInterfaces())


//os得属性
console.log('操作系统的行尾符的常量EOL ---- ' + os.EOL)
