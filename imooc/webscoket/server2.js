const http = require('http');
const WebSocket = require('ws');
const fs = require('fs')
const server = http.createServer((req, res) => {
  const html = fs.readFileSync("a.html", "utf-8");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(html);
  }
  res.end();
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(8000);
