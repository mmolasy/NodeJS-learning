const fs = require("fs");
const path = require("path");

function file(filename){
    return path.join(__dirname, "files", filename);
}

/*fs.readFile(file("1.txt"),"utf-8", function (err, data) {
    if(err){
        throw err;
    }

    console.log(data);
});

var file2 = fs.readFileSync(file("1.txt"), "utf-8");
console.log(file2);*/

var file3 = fs.createReadStream(file("3.txt"), {
    encoding: 'utf-8'
});

file3.pipe(process.stdout);