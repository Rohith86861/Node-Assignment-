var events= require('events');
var eventEmitter=new events.EventEmitter();
var listener1= function listener1()
{
    console.log("Listener1 is executed...");

}
eventEmitter.on('myevent',listener1)
eventEmitter.on('myevent2',function(){});
console.log(eventEmitter.eventNames());