EXAMPLE 1:
var events = require('events');

function Door(colour) {
  this.colour = colour;
  events.EventEmitter.call(this);

  this.open = function()
  {
  this.emit('open');
  }
}

Door.prototype.__proto__ = events.EventEmitter.prototype;

var frontDoor = new Door('brown');

frontDoor.on('open', function() {
    console.log('ring ring ring');
  });
frontDoor.open()

OUTPUT:
PS C:\Users\Rajeshwary\nodeweek> node example.js
ring ring ring


EXAMPLE 2:

//Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of events.EventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

OUTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
2 Listner(s) listening to connection event
listner1 executed.
listner2 executed.
Listner1 will not listen now.
listner2 executed.
1 Listner(s) listening to connection event
Program Ended.
