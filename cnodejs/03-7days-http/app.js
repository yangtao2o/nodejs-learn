const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1]) 
  const headers = req.headers
  const userAgent = headers['user-agent']
  const resData = {
    method,
    url,
    path,
    query,
    headers,
    userAgent
  }

  res.setHeader('Content-type', 'application/json')

  if(method === 'GET') {
    res.end(JSON.stringify(resData))
  }

  if(method === 'POST') {
    let postData = []

    req.on('data', chunk => {
      postData.push(chunk)
    })

    req.on('end', () => {
      resData.postData = Buffer.concat(postData).toString()
      res.end(JSON.stringify(resData))
    })
  }
}).listen(8000)
