const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Content-Length", 20);
    res.setHeader("Transfer-Encoding", "chunked");
    res.write("<p>Hello, </p>");
    setTimeout(() => {
      res.write("第一次数据<br>");
    }, 1000);
    setTimeout(() => {
      res.write("第二次数据");
      res.end();
    }, 2000);
  }
});

server.listen(8000);
