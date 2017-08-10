const fs = require("fs");
const Console = require("console").Console;
const gzip = require("zlib").createGzip();

var bufor = Buffer.from("W tym zdaniu są jakieś polskie znaki.", "utf8");

console.log(bufor.toString());

bufor.write("lorem ipsum");

console.log(bufor.toString());

var stream = fs.createReadStream("./text.txt", {
     highWaterMark: 16*1024
 });


/*stream.on("data", function (chunk) {
    var length = chunk.length;
    console.log("chunk length is "+Math.round(length/1024)+" kb");
    console.log(chunk);
});

stream.on("end", function () {
    console.log("koniec wczytywania");
});

stream.pipe(process.stdout);*/


var logs = fs.createWriteStream("./logs.txt");
var errors = fs.createWriteStream("./errors.txt");

const myConsole = new Console(logs, errors);

myConsole.log("1 wiadomosc");
myConsole.log("2 wiadomosc");
myConsole.error("2 error");

var compressed = fs.createWriteStream("./text.txt.gz");
console.time("gzip");
var gzipStream = stream.pipe(gzip).pipe(compressed);
gzipStream.on("close", function () {
   console.timeEnd("gzip");
});
