var http = require('http')
var fs =require('fs')

const server = http.createServer((req,res)=>{
    // const text = fs.readFileSync('./Content/big.txt','utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./Content/big.txt' ,'utf8');
    fileStream.on('open' ,()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error' , (err)=>{
       res.end(err);
        
    })
})

server.listen(5000,()=>{
    console.log('server listening on the port 5000...!');
    
})
