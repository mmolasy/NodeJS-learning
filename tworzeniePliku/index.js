const fs = require("fs");
const path = require("path");

function file(filename){
    return path.join(__dirname, "files", filename);
}

/*
fs.mkdir(path.join(__dirname, "newFiles"), function (err) {
    if(err){
        if(err.code === "EEXIST"){
            console.log("File already exists");
        }else {
            console.log("error");
            console.err(err);

        }
    }else {
        console.log("New directory has been created");
    }
})*/


/*fs.writeFile(file("4.txt"), "", function (err) {
   if(err){
       throw err;
   }else{
       console.log("success");
   }
});*/

/*
fs.appendFile(file("4.txt"), Date.now()+"\n", function (err) {
    if(err)
        throw err;
    else
        console.log("success");
})*/


/*
var file2 = fs.createWriteStream(file("2.txt"));

file2.end("dodane");*/


/*var file2 = fs.createWriteStream(file("2.txt"));
file2.on("finish", function () {
    console.log("zakonczono kopiowanie");
});

var file1 = fs.createReadStream(file("1.txt"));

file1.pipe(file2);*/



fs.mkdtemp(path.join(__dirname, "uploads-"), function (err, data) {
    if(err)
        throw err;
    else
        console.log("utworzono tymczasowy plik");
})