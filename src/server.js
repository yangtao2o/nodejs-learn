var http = require('http');

function onRequest(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write('Hello Nodejs');

  console.log('http://127.0.0.1:8888');
  response.end();
}

http.createServer(onRequest).listen(8888);