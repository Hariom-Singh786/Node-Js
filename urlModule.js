var http = require('http');
var url = require('url');
var fs = require('fs');
var file = 'hotsummer.html';
const PORT = 3000;

http.createServer((req, res) => {
    var q = url.parse(req.url, true); // Parse the URL with query string
    var filename = "." + file;
    
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found");
        } else {
            res.writeHead(200);
            res.write(data);
            return res.end("OK");
        }
    });
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
