const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*"
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
