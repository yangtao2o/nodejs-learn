const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1]) 
  const resData = {
    method,
    url,
    path,
    query
  }

  res.setHeader('Content-type', 'application/json')

  if(method === 'GET') {
    res.end(JSON.stringify(resData))
  }

  // 比如请求 http://127.0.0.1:8000/api/blog?ip=1

  // {
  //   "method": "POST",
  //   "url": "/api/blog?ip=1",
  //   "path": "/api/blog",
  //   "query": {
  //       "ip": "1"
  //   },
  //   "postData": "{\n\t\"title\": \"你说什么\",\n\t\"content\": \"我知道你知道\"\n}"
  // }

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
