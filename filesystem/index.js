const fs = require("fs");
const path = require("path");

/*fs.exists(path.join(__dirname, "files", "1.txt"), function(exists) {
    console.log(exists);
});*/

/*console.log("Czy plik istnieje");

fs.stat(path.join(__dirname, "files", "1.txt"), function (err, stats) {
   if(err){
       console.error(err);
       return;
   }

   console.log(`Data utworzenia: ${stats.birthtime}`);
   console.log(`Data ost modyfikacji: ${stats.mtime}`);
   console.log(`Is file: ${stats.isFile()}`);
   console.log(`Is directory: ${stats.isDirectory()}`);
});*/


/*fs.readdir(path.join(__dirname, "files"), function (err, files) {
    if(err){
        console.error(err.toString());
        throw err;
    }

    files.forEach(function (file) {
        fs.stat(path.join(__dirname, "files", file),function (err, stats) {
            if(err){
                console.error(err);
                throw err;
            }
            console.log(`Plik ${file}`);
            console.log(`Data utworzenia ${stats.birthtime.getFullYear()}\n`)
        })
    })

});*/

try {
    var stats = fs.statSync(path.join(__dirname, "files", "1.txt"));
}catch (err){
    console.error(err);
}
console.log(stats);

console.log("Czas start");