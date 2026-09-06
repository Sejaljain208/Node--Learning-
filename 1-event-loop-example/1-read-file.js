const {readFile} = require('fs')

console.log('started a first task');

readFile('./Content/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
          return         
    }
    console.log(result);
    console.log('Completed first task');
})

console.log('Starting 2 task :');

// output : 
// started a first task
// Starting 2 task :
// this is the first test file ...!
// Completed first task
// PS C:\Users\sejal\Desktop\Node> 
