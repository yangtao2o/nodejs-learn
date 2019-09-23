# HTTP

> 超文本传输协议，是一种 Web 协议，属于 TCP 上层的协议。

使用 NodeJS 内置的 http 模块简单实现一个 HTTP 服务器:

```js
const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello World!");
  })
  .listen(3000);
```

以上程序创建了一个 HTTP 服务器并监听 3000 端口，打开浏览器访问该端口`http://127.0.0.1:3000/`就能够看到效果。

## Get/Post请求

写一个简易的 get、post 请求：

```js
const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  // 获取 path
  const path = url.split('?')[0]
  // 解析 query
  const query = querystring.parse(url.split('?')[1]) 
  const resData = {
    method,
    url,
    path,
    query
  }
  // 设置返回格式为JSON
  res.setHeader('Content-type', 'application/json')

  if(method === 'GET') {
    res.end(JSON.stringify(resData))
  }

  if(method === 'POST') {
    let postData = ''

    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
}).listen(8000)
```

比如`POST`请求 `http://127.0.0.1:8000/api/blog?ip=1`，然后使用 Postman 工具测试结果如下：

```json
{
  "method": "POST",
  "url": "/api/blog?ip=1",
  "path": "/api/blog",
  "query": {
      "ip": "1"
  },
  "postData": "{\n\t\"title\": \"你说什么\",\n\t\"content\": \"我知道你知道\"\n}"
}
```

## http

[http](http://nodejs.cn/api/http.html) 模块提供两种使用方式：

1. 作为服务端使用时，创建一个 HTTP 服务器，监听 HTTP 客户端请求并返回响应。
2. 作为客户端使用时，发起一个 HTTP 客户端请求，获取服务端响应。

### 一个简单的 Web 服务器

```js
const http = require("http");
const qs = require("querystring");

http
  .createServer(function(req, res) {
    if ("/" == req.url) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        [
          '<form method="POST" action="/url">',
          "<h1>My Form</h1>",
          "<fieldset>",
          "<label>Personal information</label>",
          "<p>What is your name?</p>",
          '<input type="text" name="name" />',
          "<p><button>Submit</button></p>",
          "</fieldset>",
          "</form>"
        ].join("")
      );
    } else if ("/url" == req.url && "POST" == req.method) {
      var body = "";
      req.on("data", function(chunk) {
        body += chunk;
      });
      req.on("end", function() {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          "<p>Content-type: " +
            req.headers["content-type"] +
            "</p>" +
            "<p>Data: " +
            qs.parse(body).name +
            "</p>"
        );
      });
    } else {
      res.writeHead(404);
      res.end("Not Found.");
    }
  })
  .listen(3000);
```

### 一个 Twitter Web 客户端

创建服务器：app.js

```js
const http = require("http");
const qs = require("querystring");

http
  .createServer(function(req, res) {
    var body = "";
    req.on("data", function(chunk) {
      body += chunk;
    });
    req.on("end", function() {
      res.writeHead(200);
      res.end("Done");
      console.log("\n got name \033[90m" + qs.parse(body).name + "\033[39m\n");
    });
  })
  .listen(3000);
```

创建客户端：client.js

```js
const http = require("http");
const qs = require("querystring");

function send(theName) {
  http
    .request(
      {
        host: "127.0.0.1",
        port: 3000,
        url: "/",
        method: "POST"
      },
      function(res) {
        var body = "";
        res.setEncoding("utf8");
        res.on("data", function(chunk) {
          body += chunk;
        });
        res.on("end", function() {
          console.log("\n  \033[90m request complete! \033[39m");
          process.stdout.write("\n your name: ");
        });
      }
    )
    .end(qs.stringify({ name: theName }));
}

process.stdout.write("\n your name: ");
process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function(name) {
  send(name.replace("\n", ""));
});
```

启动`node app.js`，再启动`node client.js`

## HTTPS

https 模块与 http 模块极为类似，区别在于 https 模块需要额外处理 SSL 证书

```js
const options = {
  key: fs.readFileSync("./ssl/default.key"),
  cert: fs.readFileSync("./ssl/default.cer")
};

const server = https.createServer(options, function(request, response) {
  // ...
});
```

## URL

处理 HTTP 请求时 url 模块使用率超高，因为该模块允许解析 URL、生成 URL，以及拼接 URL。

首先我们来看看一个完整的 URL 的各组成部分。

```bash
> url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
```

当然，不完整的 url，也可以解析：

```js
const http = require("http");
const url = require("url");

http
  .createServer((request, response) => {
    let body = [];
    const tmp = request.url; // /foo/bar?a=b

    response.writeHead(200, { "Content-Type": "text/plain" });

    console.log("url-parse", url.parse(tmp));

    response.end("Hello World");
  })
  .listen(8000);
```

```js
{
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?a=b',
  query: 'a=b',
  pathname: '/foo/bar',
  path: '/foo/bar?a=b',
  href: '/foo/bar?a=b' 
}
```

format 方法允许将一个 URL 对象转换为 URL 字符串

```js
const urlFormat = url.format({
  protocol: "http:",
  host: "www.example.com",
  pathname: "/p/a/t/h",
  search: "query=string"
});

console.log({ urlFormat }); // { urlFormat: 'http://www.example.com/p/a/t/h?query=string' }
```

## Query String

[querystring](http://nodejs.org/api/querystring.html) 模块用于实现 URL 参数字符串与参数对象的互相转换

```js
querystring.parse("foo=bar&baz=qux&baz=quux&corge");
// { foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

querystring.stringify({ foo: "bar", baz: ["qux", "quux"], corge: "" });
// 'foo=bar&baz=qux&baz=quux&corge='
```

## Zlib

zlib模块提供了数据压缩和解压的功能。当我们处理HTTP请求和响应时，可能需要用到这个模块。

## Net

net模块可用于创建Socket服务器或Socket客户端。

由于Socket在前端领域的使用范围还不是很广，这里先不涉及到WebSocket的介绍，仅仅简单演示一下如何从Socket层面来实现HTTP请求和响应。

## 问题解答

使用NodeJS操作网络，特别是操作HTTP请求和响应时会遇到一些惊喜，这里对一些常见问题做解答。

* 为什么通过headers对象访问到的HTTP请求头或响应头字段不是驼峰的？

从规范上讲，HTTP请求头和响应头字段都应该是驼峰的。但现实是残酷的，不是每个HTTP服务端或客户端程序都严格遵循规范，所以NodeJS在处理从别的客户端或服务端收到的头字段时，都统一地转换为了小写字母格式，以便开发者能使用统一的方式来访问头字段，例如`headers['content-length']`。

* 为什么http模块创建的HTTP服务器返回的响应是chunked传输方式的？

因为默认情况下，使用`.writeHead`方法写入响应头后，允许使用`.write`方法写入任意长度的响应体数据，并使用`.end`方法结束一个响应。由于响应体数据长度不确定，因此 NodeJS 自动在响应头里添加了`Transfer-Encoding: chunked`字段，并采用 chunked 传输方式。但是当响应体数据长度确定时，可使用`.writeHead`方法在响应头里加上`Content-Length`字段，这样做之后 NodeJS 就不会自动添加`Transfer-Encoding`字段和使用 chunked 传输方式。

* 为什么使用http模块发起HTTP客户端请求时，有时候会发生socket hang up错误？

答： 发起客户端HTTP请求前需要先创建一个客户端。http模块提供了一个全局客户端`http.globalAgent`，可以让我们使用`.request`或`.get`方法时不用手动创建客户端。但是全局客户端默认只允许5个并发Socket连接，当某一个时刻 HTTP 客户端请求创建过多，超过这个数字时，就会发生`socket hang up`错误。解决方法也很简单，通过`http.globalAgent.maxSockets`属性把这个数字改大些即可。另外，https 模块遇到这个问题时也一样通过`https.globalAgent.maxSockets`属性来处理。

## 学习资料

* [7-days-nodejs](http://nqdeng.github.io/7-days-nodejs/#1.1) - 文章
* 《了不起的 Node.js：将 JavaScript 进行到底》- 书籍
* 《新时期的 Node.js 入门》- 书籍
* [Node.js从零开发Web Server博客项目 前端晋升全栈工程师必备](https://coding.imooc.com/class/320.html) - 视频