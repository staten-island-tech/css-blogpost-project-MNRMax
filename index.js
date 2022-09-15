const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "localhost";
const port = 80;

const requestListener = function (req, res) {
  if (req.url == "/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.writeHead(200);
    fs.createReadStream("style.css").pipe(res);
  } else if (req.url == "/image.jpg") {
    res.setHeader("Content-Type", "image/jpg");
    res.writeHead(200);
    fs.createReadStream("image.jpg").pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    fs.createReadStream("index.html").pipe(res);
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
