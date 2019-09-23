const http = require('http')
const url = require('url')

http.get('http://www.example.com/', function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log('body: ', body.toString());
    });
});



http.createServer((request, response) => {
  let body = []
  const tmp = request.url

  console.log('url-parse', url.parse(tmp))
  response.writeHead(200, {'Content-Type': 'text/plain'})

  console.log('Url: ', request.url)
  console.log('Method: ', request.method)
  console.log('Headers: ', request.headers)

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  request.on('end', () => {
    body = Buffer.concat(body);
    console.log(body.toString());
  })


  response.end('Hello World')
}).listen(8000)
