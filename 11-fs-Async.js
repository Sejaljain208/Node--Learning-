//Asynchronous :Asynchronous = Non-blocking (Without Sync):

const fs = require('fs')

console.log("start");

//using read and write file 
fs.readFile('./Content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
  const first =  result
fs.readFile('./Content/Second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result
    fs.writeFile('./Content/result-async.txt',`here is the result : ${first} , ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("done with the task ", result);
    })
  })
})

console.log("End");


// this is called callback helll , due to too many callback ,,.>?!
