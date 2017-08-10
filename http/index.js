const https = require("https");
const fs = require("fs");
const path = require("path");

var options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.cert')),
};

const server = https.createServer(options, function (req, res ) {

    var types = {
        ".html" : "text/html",
        ".png" : "image/png"
    };

    var filename, file;

    if(req.url === '/' || req.url === '/index.html'){
        filename = 'index.html';
    }else {
        filename = req.url.slice(1);
    }

    file = fs.createReadStream(path.join(__dirname, "public", filename));

    file.on("error", function (err) {
        res.writeHead(404, "Not found");
        res.end();
    });

    res.writeHead(200, {
        "Content-Type": types[path.extname(filename)]
    });

    file.pipe(res);
});

server.listen(8080, function () {
   console.log("server started");
});