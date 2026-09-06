//os module methods and properties 

const os = require('os')
// abb os ke methods use kar sakte hai

// info about current user
console.log(os.userInfo())

// it will tell the time in seconds that system ko start huye kitna second ho chuka hai 
console.log(`The system Uptime is ${os.uptime()} seconds`)

//some methods
console.log("OS type :- ",os.type())
console.log("OS release :- ",os.release())
console.log("Architecture :- ",os.arch())
console.log("Hostname :- ",os.hostname())
console.log("Home Directory :- ",os.homedir())
console.log("CPU cores :- ",os.cpus().length)
console.log("Total memory :-  ",os.totalmem())
console.log("Free Memory :-  ",os.freemem())

