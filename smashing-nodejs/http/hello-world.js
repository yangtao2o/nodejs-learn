require('http').createServer(function(req, res) {
  console.log(req.headers)
  res.writeHead(200, {
    'content-Type': 'text/html'
  });
  res.end('Hello <br> world');
}).listen(3000);