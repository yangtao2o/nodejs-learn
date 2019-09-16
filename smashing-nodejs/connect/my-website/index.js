var http = require('http');
var connect = require('connect');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var users = require('./config/users.json');

var app = connect();

// logger
app.use(morgan('dev'));

// parse an HTML body into a string
app.use(bodyParser());

app.use(cookieParser());

app.use(session({
  secret: 'my site secret'
}));

app.use(function(req, res, next) {
  if('/' == req.url && req.session.logged_in) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Welcome back, <b>${req.session.name}</b><a href="/logout">Logout</a>`);
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if('/' == req.url && 'GET' == req.method) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end([
      '<form method="POST" action="/login">',
        '<h1>Login</h1>',
        '<fieldset>',
          '<label>Please log in</label>',
          'Username: <input type="text" name="user" /><br>',
          'Password: <input type="password" name="password" />',
          '<p><button>Submit</button></p>',
        '</fieldset>',
      '</form>'
    ].join(''));
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if('/login' == req.url && 'POST' == req.method) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(!users[req.body.user] || req.body.password != users[req.body.user].password) {
      res.end('Bad username/password<br><a href="/">Back</a>');
    } else {
      req.session.logged_in = true;
      req.session.name = users[req.body.user].name;
      res.end('Success!');
    }
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if('/logout' == req.url) {
    req.session.logged_in = false;
    res.writeHead(200);
    res.end('Logged out!');
  } else {
    next();
  }
})


//create node.js http server and listen on port
http.createServer(app).listen(3000);