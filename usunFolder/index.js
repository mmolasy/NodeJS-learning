const fs = require("fs");
const path = require("path");

function file(filename){
    return path.join(__dirname, "files", filename);
}

function removeDirectory(directory, cb){
    fs.rmdir(path.join(__dirname, directory), function (err) {
        if(err){
            if(err.code !== 'ENOTEMPTY'){
                return cb(err, directory);
            }

            fs.readdir(path.join(__dirname, directory), function (err, files) {
                if(err){
                    return cb(err);
                }
                var counter = 0;

                files.forEach(function (file, index) {
                    fs.unlink(path.join(__dirname, directory, file), function (err) {
                        if(err){
                            return cb(err);
                        }else{
                            counter++;

                            if(index+1 === files.length && counter !== files.length){
                                return cb(err);
                            }
                            if(counter === files.length) {
                                return removeDirectory(directory, cb);
                            }
                        }
                    })
                });
            })
        } else {
            cb(null, directory);
        }
    })
}


removeDirectory("asdf", function (err, directory) {
    if(err){
        console.log("error");
    }else{
        console.log("Success");
    }
});