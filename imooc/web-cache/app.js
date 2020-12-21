const http = require('http')
const fs = require('fs')
const md5 = require('md5')

function handle(req, res) {
  const html = fs.readFileSync('index.html', 'utf-8')
  const script = fs.readFileSync('script.js', 'utf-8')

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.write(html)
  }

  if (req.url === '/script.js') {
    const etag = md5(script)
    const lastMidified = lastUpdatedDate('./script.js')
    const ifNoneMatch = req.headers['if-none-match']

    let statusCode = ifNoneMatch === etag ? 304 : 200

    res.writeHead(statusCode, {
      'Content-Type': 'text/javascript',
      // 'Cache-Control': 'no-store',
      'Last-Modified': lastMidified,
      Etag: etag,
    })
    res.write(script)
  }
  res.end()
}

function lastUpdatedDate(file) {
  const { mtime } = fs.statSync(file)
  return mtime
}

http.createServer(handle).listen(8000)
