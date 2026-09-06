//events : they are the core module in node js which is used to handle events in node js. we can create our own events and can listen to them and can emit them.

//.on() method is used to listen to the event,we can also listen to the event multiple times using on() method.
//  emit() method is used to emit the event. 

//events driven programming is the concept of node js. it describe the flow of program determined by the events. it is the programming paradigm in which the flow of program is determined by events such as user actions, sensor outputs or messages from other programs or threads.

//simple example of event emitter in node js
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('greet',() => {
    console.log(`hello Sejal..!`);
})

customEmitter.emit('greet')

//there can be multiple methods as we wants and we even pass the parameter/...
customEmitter.on('response',(name , id) => {
    console.log(`data received => user : ${name} with age ${id}`);
})

customEmitter.on('response',() => {
    console.log(`some other logic are here ...!`);
})

customEmitter.emit('response','Satya',22)

//the order matter ...first we listen with .on() and then emit //




