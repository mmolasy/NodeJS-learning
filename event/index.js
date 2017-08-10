const EventEmitter = require('events');

var emitter = new EventEmitter();

//emitter.setMaxListeners(0);

emitter.on("message", function(msg) {
    console.log("wiadomość: "+msg);
});

emitter.emit("message", "witaj siema");