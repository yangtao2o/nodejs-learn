const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const html = fs.readFileSync("index.html", "utf8");
  const url = req.url;
  if(url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.end(html);

  }
  if(url === "/form") {
    let datas = '';
    req.on('data', chunk => {
      datas += chunk;
    })
    req.on('end', () => {
      res.writeHead(200, {
        "Content-Type": "text/plain"
      })
      console.log(datas)
      res.end(datas);
    })
  }
});

server.listen(8000);
