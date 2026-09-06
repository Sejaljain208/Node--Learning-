// lecture 1 : basic code of node , how to run : node filename 

const amount =12
if(amount<10){
    console.log('number is smaller than 10 -> ' , amount)
}
else{
    console.log('number is greater than 10 -> ',amount)
}
console.log(`\n this is my first program...!! `)

// (node package manager) npm - global command , comes with node
// npm --version 

//local dependency -use it in any project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>   (window)
// sudo install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1 ,[2 ,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log("hello world");