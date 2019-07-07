var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});

router.post('/login', function(req, res, next) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  console.log('req: ', req.body)
  if(req.body.username === user.username && req.body.password === user.password) {
    res.redirect('/home')
  } 
  res.redirect('/login')
});

router.get('/logout', function(req, res, next) {
  res.redirect('/')
});

router.get('/home', function(req, res, next) {
  var user = {
    username: '大涛子',
    password: 'admin'
  }
  if(user.username && user.password) {
    res.render('home', { 
      title: 'Home',
      user: user 
    });
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
