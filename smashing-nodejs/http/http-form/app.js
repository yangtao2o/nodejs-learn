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