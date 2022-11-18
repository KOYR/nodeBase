function Hello(){
    var name;
    this.setName = function (nameStr){
        name = nameStr
    }
    this.sayHello = function (){
        console.log('Hello ' + name + '!')
    }
}
module.exports = Hello