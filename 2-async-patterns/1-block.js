const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to home page');
          return
    }
    if(req.url === '/about'){
        //Blocking code
        for(let i =0;i<100;i++){
          for(let j =0;j<100;j++){
            console.log(`${i} , ${j}`);   //jb tk ye complete nhi hota console mai , tab tk about se home page pr bapis jana nhi ho pata 
           
           }
        }
        res.end('Welcome to about page');
        return
    }
 
    res.end(`
        <h1>Oops..!</h1>
        <p>We can't seem to find the page , you are looking for</p>
        <a href="/">back home</a>
    `)

})

server.listen(5000, ()=>{
    console.log('server listening on the port 5000...!');    
})