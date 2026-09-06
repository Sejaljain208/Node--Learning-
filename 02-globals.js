// lecture 2 : GLOBAL VARIABLE IN NODE ....

//GLOBALS - No window, no document!!!

// Node.js Basics
//    │
//    ├── Globals
//    │     ├── __dirname
//    │     ├── __filename
//    │     ├── require
//    │     ├── module
//    │     └── process
//    │
//    └── Timers
//          ├── setTimeout()
//          └── setInterval()

//some of the global variables in Node.js are:

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// //it will give the path of the current directory , in the terminal by running the command node app.js
console.log(__dirname) 
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

// setTimeout():Kisi code ko specified time ke baad ek baar execute karta hai.
console.log("start")
setTimeout(()=>{
    console.log("hiii")
},2000)

console.log("End")  

// output :2000 = 2000 milliseconds = 2 seconds ,
// Start
// End
// hiii

// setInterval() : Kisi code ko repeatedly fixed interval par execute karta hai.
const interval = setInterval(()=>{
    console.log('hello')
},2000)
setTimeout(()=>{
    clearInterval(interval)
},10000)

// o/p :Yahan interval har 2 sec chalega, aur 10 sec baad clearInterval() usko stop kar dega.kyuki 10 sec mai 4 baar hello or print hoga , or 5 bhi baar , clear ho jayegaa....eslia hello 4 baar print karegaa.....