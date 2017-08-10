const EventEmitter = require('events');
const utils = require("util");


function Puller(url){
    EventEmitter.call(this);
    this.url = url;

    this.on("removeListener", function () {
       var active = this.listenerCount("data");

       console.log("active: "+active);
       if (active==0) {
           clearInterval(this.interval);
       }
    });
}

Puller.prototype.pull = function () {
    var self = this;
    self.interval = setInterval(function(){
        self.emit("data", {
            data: "pobrane dane",
            url: self.url
        })
    }, 1000);
};

Puller.prototype.stop = function (cb) {
    var self = this;
    self.removeListener("data", cb);
};

utils.inherits(Puller, EventEmitter);

module.exports = Puller;