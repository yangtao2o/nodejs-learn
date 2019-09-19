const express = require('express')
const morgan = require('morgan')
const utils = require('utility')

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  const q = req.query.q
  const md5Value = q ? utils.md5(q) : "Hello Express!"
  res.send(md5Value)
})

app.listen(3000, () => console.log('app is running at port 3000'))