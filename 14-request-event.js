const { subscribe } = require('diagnostics_channel')
const http =require('http')

// const server = createServer((req,res)=> {
//     res.end('Welcome')
// })

//Using Event Emitter API
const server = http.createServer()
//emits request event
// subscribe to it / listen for it / respond to it
server.on('request' ,(req, res) =>{
    res.end('Welcome')
})

server.listen(5000,()=>{
    console.log('server listening on the port 5000 ..1');
})

