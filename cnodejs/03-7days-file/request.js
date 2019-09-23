const http = require('http')
const options = {
  hostname: 'www.example.com',
  port: 8000,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

request = http.request(options, res => {})

request.write('Updating...')
request.end()