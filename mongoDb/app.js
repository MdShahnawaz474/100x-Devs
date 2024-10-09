const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    if(req.url==="/favicon.ico")return res.end()
    const log = `${Date.now()}: ${req.url} new req received\n`;
    const myurl = url.parse(req.url);
    console.log(myurl);
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Failed to write log:", err);
            res.end("Internal Server Error");
            return;
        }

        switch (req.url) {
            case "/":
                res.end('Home page');
                break;
            case "/about":
                res.end('about-us');
                break;
            default:
                res.end('404 Not found');
        }
    });
});

myServer.listen(8000, () => {
    console.log("server is listening");
});
