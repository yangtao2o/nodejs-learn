const http = require('http')
const url = require('url')
const querystring = require('querystring')

http.createServer((request, response) => {
  let body = []
  const tmp = request.url  // /foo/bar?a=b

  response.writeHead(200, {'Content-Type': 'text/plain'})

  console.log('url-parse', url.parse(tmp))

  // url-parse Url {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: '?a=b',
  //   query: 'a=b',
  //   pathname: '/foo/bar',
  //   path: '/foo/bar?a=b',
  //   href: '/foo/bar?a=b' 
  // }

  const urlFormat = url.format({
      protocol: 'http:',
      host: 'www.example.com',
      pathname: '/p/a/t/h',
      search: 'query=string'
  });

  console.log({urlFormat})  // { urlFormat: 'http://www.example.com/p/a/t/h?query=string' }

  const urlResolve = url.resolve('http://www.example.com/foo/bar', '../baz');

  console.log({urlResolve})  // { urlResolve: 'http://www.example.com/baz' }

  const qsParse = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
  console.log(qsParse)  // { foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

  const qsString = querystring.stringify({ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' })
  console.log(qsString)  // 'foo=bar&baz=qux&baz=quux&corge='
  
  

  response.end('Hello World')
}).listen(8000)