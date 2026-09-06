//file system ke two type hai 
// 1) Sync (Synchronous = Blocking) : its use sync methods
// 1) Aysnc (Asynchronous = NON-Blocking) : its use Async / without sync methods


//hum abhi sync methods dekhege...!
const fs = require('fs') 

console.log("start");

//this readfileSync used for reading file values/text
const first =fs.readFileSync('./Content/first.txt','utf8')
console.log("done with the task",first );
const Second =fs.readFileSync('./Content/Second.txt','utf8')
console.log(Second);

const data = fs.readFileSync('./Content/subfolder/text.txt','utf8')
console.log(data);


//writefileSync used to create a file and put value and if file already exits , it replace or override the values of file ,..
fs.writeFileSync('./Content/result-sync.txt',`here is the result : ${first} , ${Second}` ,{flag :'a'}
 )

// appendFileSync() :File mein content add karna , par existing content delete nhi hoga 
fs.appendFileSync('./Content/result-sync.txt','\n this is a new line ...!')

// unlinkSync(): File delete karna —
fs.unlinkSync('./Content/result-sync.txt')      //result-sync.txt deleted

// mkdirSync() :Folder create karna —
fs.mkdirSync('./Content/newfolder')             //newfolder created inside content folder

// rmdirSync() :Empty folder delete karna
fs.rmdirSync('./Content/newfolder')        //Ye tabhi kaam karega jab newFolder empty ho.

//readdirSync() : Folder ke andar files dekhna 
const files = fs.readdirSync('./Content')
const file = fs.readdirSync('./Content/subfolder')
console.log(files , file)

console.log("End");