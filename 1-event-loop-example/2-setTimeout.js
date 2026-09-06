//started operating system process
console.log('first');

setTimeout(()=>{
    console.log('second');
},0);
console.log('third'); 

//completd and exited operating system process
//settimeout is asynchronous and they get offloaded ...

// output : 
// first
// third
// second
// PS C:\Users\sejal\Desktop\Node> 