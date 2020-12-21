const http = require('http')
const fs = require('fs')
const { getLocalIP, getPublicIP } = require('./getip.js')

const myHost = getLocalIP()

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('index.html', 'utf8')
  const url = req.url
  if (url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.end(html)
  }
  if (url === '/form') {
    let datas = ''
    req.on('data', chunk => {
      datas += chunk
    })
    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      })
      console.log(datas)
      res.end(datas)
    })
  }
  if (url === '/test') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      // 'Cache-Control': 'no-cache',
    })
    res.end(
      JSON.stringify({
        code: 0,
        data: [{ 1: { result: 'scuccess' } }, { 2: { result: 'ddd333' } }],
      })
    )
  }
})

const PORT = 8000
server.listen(PORT, () => {
  console.log(`Server running at http://${myHost}:${PORT}`)
})
