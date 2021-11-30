var events= require('events');
const { listeners } = require('process');
var eventEmitter=new events.EventEmitter();
var listener1= function listener1()
{
    console.log("Listener1 is executed...");

}
var listener2= function listener2()
{
    console.log("Listener2 is executed...");

}
eventEmitter.on('myevent',listener1)
eventEmitter.addListener('myevent',listener2)
eventEmitter.emit('myevent');
console.log(eventEmitter.listenerCount('myevent')+", event listeners ="+eventEmitter.listeners('myevent'));
eventEmitter.removeListener('myevent',listener2);
console.log(eventEmitter.listenerCount('myevent')+", event listeners ="+eventEmitter.listeners('myevent'));
