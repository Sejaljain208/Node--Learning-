//  some name should be local (not share ) for suppose secret , but some should be share like john and peter.

// local 
const secret = 'super secret'

// share
const john = 'john'
const peter = 'peter'

// to share this module we use object of module that is - export
console.log(module);

module.exports ={john , peter}     //the key name should exactly same as syntax. 
