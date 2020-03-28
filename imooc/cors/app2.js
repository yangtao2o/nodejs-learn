const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PUT, POST, GET",
    "Access-Control-Allow-Headers": "X-Custom-Header",
    "Access-Control-Max-Age": 2000,
    "Access-Control-Allow-Credentials": true
  });
  let resData = {};
  let postData = [];
  req.on("data", chunk => {
    postData.push(chunk);
  });

  req.on("end", () => {
    resData.postData = Buffer.concat(postData).toString();
    res.end(JSON.stringify(resData));
  });
});

server.listen(8000);
