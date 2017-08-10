const fs = require("fs");
const path = require("path");

function file(filename){
    return path.join(__dirname, "files", filename);
}

/*fs.rename(file("1.txt"), file("11.txt"), function (err) {
    if(err)
        throw err;
});*/


function moveFile(filePath, directory, cb){
    var oldPath = path.join(__dirname, path.normalize(filePath));
    console.log(oldPath);
    fs.mkdir(path.join(__dirname, directory), function (err) {
        if(err && err.code !== 'EEXIST'){
            return cb(err, directory, cb);
        }
        fs.rename(oldPath, path.join(__dirname, directory, path.basename(filePath)), function (err) {
            if(err){
                return cb(err, filePath, directory);
            }

            cb(null, filePath, directory);
        })

    })
}


moveFile("files/3.txt", "copied", function (err, filepath, directory) {
    if(err)
        throw err;

    else{
        console.log(filepath);
        console.log(directory);
    }
})