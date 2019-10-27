# Npm Package

## [utility](https://www.npmjs.com/package/utility)

A collection of useful utilities.

#### md5

```js
utils.md5("苏千").should.equal("5f733c47c58a077d61257102b2d44481");
utils.md5(Buffer.from("苏千")).should.equal("5f733c47c58a077d61257102b2d44481");
// md5 base64 format
utils.md5("苏千", "base64"); // 'X3M8R8WKB31hJXECstREgQ=='

// Object md5 hash. Sorted by key, and JSON.stringify. See source code for detail
utils
  .md5({ foo: "bar", bar: "foo" })
  .should.equal(utils.md5({ bar: "foo", foo: "bar" }));
```

## [morgan](https://www.npmjs.com/package/morgan)

HTTP request logger middleware for node.js

```js
var express = require("express");
var morgan = require("morgan");

var app = express();

app.use(morgan("combined"));

app.get("/", function(req, res) {
  res.send("hello, world!");
});
```

## [superagent](https://www.npmjs.com/package/superagent)

处理 HTTP 请求

```js
const superagent = require("superagent");

// callback
superagent
  .post("/api/pet")
  .send({ name: "Manny", species: "cat" }) // sends a JSON post body
  .set("X-API-Key", "foobar")
  .set("accept", "json")
  .end((err, res) => {
    // Calling the end function will send the request
  });

// promise with then/catch
superagent
  .post("/api/pet")
  .then(console.log)
  .catch(console.error);

// promise with async/await
(async () => {
  try {
    const res = await superagent.post("/api/pet");
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
```

## [cheerio](https://www.npmjs.com/package/cheerio)

Fast, flexible & lean implementation of core jQuery designed specifically for the server.

```js
const cheerio = require("cheerio");
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$("h2.title").text("Hello there!");
$("h2").addClass("welcome");

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>
```

## [EventProxy](https://www.npmjs.com/package/eventproxy)

一种事件式编程的思维

## [cookie-parser](https://www.npmjs.com/package/cookie-parser)

解析 Cookie header 并填充由 cookie 名称键入的对象 req.cookies

```js
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

app.listen(8080);

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"
```

## [body-parser](https://www.npmjs.com/package/body-parser)

Node.js body parsing middleware.

```js
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});
```

## [cross-env](https://www.npmjs.com/package/cross-env)

Run scripts that set and use environment variables across platforms.

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

## [nodemon](https://www.npmjs.com/package/nodemon)

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```bash
nodemon ./server.js localhost 8080
```
