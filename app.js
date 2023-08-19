// const amount = 12
// if(amount < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }

// console.log(`hey its a firts node app`)
// console.log(__dirname)
// setInterval(() => {
//    console.log(`hello shriii !`)
// },1000)

// const names = require('./1-app')
// const sayHi = require('./2-app')
// const data = require('./3-app')
// console.log(data)

// sayHi('Shriverdhan')
// sayHi(names.john)

// sayHi(names.dev)

// const path = require('path')
// console.log(path.sep)

const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short intro')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we cant seem to find the page you are looking for</p>
        <a href="/">back to home </a>
    `)
   
    
})

server.listen(5000)