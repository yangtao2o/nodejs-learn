# HTTP

超文本传输协议，是一种 Web 协议，属于 TCP 上层的协议。

## 一个简单的 Web 服务器

```js
const http = require('http');
const qs = require('querystring');

http.createServer(function(req, res) {
  if('/' == req.url) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end([
      '<form method="POST" action="/url">',
        '<h1>My Form</h1>',
        '<fieldset>',
          '<label>Personal information</label>',
          '<p>What is your name?</p>',
          '<input type="text" name="name" />',
          '<p><button>Submit</button></p>',
        '</fieldset>',
      '</form>'
    ].join(''));
  } else if ('/url' == req.url && 'POST' == req.method) {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<p>Content-type: '+ req.headers['content-type'] +'</p>'
       + '<p>Data: '+ qs.parse(body).name +'</p>');
    })
  } else {
    res.writeHead(404);
    res.end('Not Found.');
  }
}).listen(3000);
```

## 一个 Twitter Web 客户端

创建服务器：app.js

```js
const http = require('http');
const qs = require('querystring');

http.createServer(function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    res.writeHead(200);
    res.end('Done');
    console.log('\n got name \033[90m' + qs.parse(body).name + '\033[39m\n');
  });
  
}).listen(3000);
```

创建客户端：client.js

```js
const http = require('http');
const qs = require('querystring');

function send(theName) {
  http.request({
    host: '127.0.0.1',
    port: 3000,
    url: '/',
    method: 'POST'
  }, function(res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      console.log('\n  \033[90m request complete! \033[39m');
      process.stdout.write('\n your name: ');
    })
  }).end(qs.stringify({ name: theName }));
}

process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(name) {
  send(name.replace('\n', ''));
})
```

然后启动`node app.js`，再启动`node client.js`

