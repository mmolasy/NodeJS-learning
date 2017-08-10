const Puller = require("./puller");

var puller = new Puller("https://google.com");

function printData(data) {
    console.log(`Otrzymane dane: ${data.data} z adresu ${data.url}`);
}

puller.on("data", printData);

puller.pull();

setTimeout(function () {
    puller.stop(printData);
}, 4100);