
let testPromise = new Promise(function (resolve, reject) {
    if (1 === 1) {
        resolve((data)=>{
            console.log(data + 'pro---sucesss --')
        })
    } else {
        reject(()=>{
            console.log('pro---error --')
        })
    }
})
testPromise.then((res) => {
    console.log(res,'then1 ----res');
    // throw new Error('then error')
    res('then1--cb--res')
}, (rej) => {
    console.log(rej, 'then1 ----rej');
    rej()
    // throw new Error('then error')
})
    .then((res) => {
        console.log( res,'then2 ----res');
        // throw new Error('then error')
    }, (rej) => {
        console.log(rej, 'then2 ----rej');
    })
    .catch(err => {
        console.log('catch error')
        console.log(err)
    })
