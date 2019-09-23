const http = require('http')

/**
 * http 模块提供两种使用方式：
 * 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
 * 作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。
 */

http.createServer((request, response) => {
  let body = []
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
