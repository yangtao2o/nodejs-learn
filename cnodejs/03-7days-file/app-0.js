const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('Hello World!')
}).listen(3000)