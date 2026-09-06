setInterval(()=>{
    console.log('hello world');
},2000)
console.log('i will run first');

//as setInterval is also asynchronous , so first the sync part will run and async part get offloaded ...and when the action is done , we will invoke setinterval. 


//process stays alive unless
// kill process CONTROL + C
//unexpected error

//output :
// i will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// ...
// ...
// ...