const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('Server listening on port :5000 ....');
})

//listen process is also asynchronous , and get offloaded ..but in case of server.listen it tell to event loop to listen for those incoming request, and respond to them appropriately.


//output :
// Server listening on port :5000 ....
// request event
// request event
// request event
// request event
// request event
// request event
