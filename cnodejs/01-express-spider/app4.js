const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const morgan = require('morgan')
const async = require('async')

const app = express()
const PORT = process.env.PORT || 8000
const URL = 'https://cnodejs.org'

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.json())

/**
 * 控制并发请求
 */

app.get('/', (req, res, next) => {
  console.log('loading...')
  console.log(`正在请求${URL}`)
  superagent.get(URL).end((err, sres) => {
    if (err) {
      return console.error(err)
    }
    const topicUrls = []
    const $ = cheerio.load(sres.text)
    let concurrencyCount = 0;
    const fetchUrl = (url, callback) => {
      let getItem = {}
      superagent.get(url).end((err, sres) => {
        if (err) {
          return new Error(err)
        }
        const $ = cheerio.load(sres.text)
        concurrencyCount++

        getItem = {
          href: url,
          title: $('.topic_full_title').text().replace(/[\r\n]/g, ""),
          comment: $('.reply_content').eq(0).text().replace(/[\ \r\n]/g, "")
        }

        console.log(`\r\n正在请求第 ${concurrencyCount} 条的数据data:\r\n${[JSON.stringify(getItem)]}`)

        callback(null, getItem)
      })
    }

    $('#topic_list .topic_title').each(function (idx, element) {
      const $element = $(element)

      const href = URL + $element.attr('href')
      console.log(`正在获取第 ${idx + 1} 条列表的url：${href}`)

      topicUrls.push(href)
    })

    if (topicUrls.length < 1) return

    console.log(`\r\n开始并发请求...\r\n`)

    async.mapLimit(topicUrls, 3, (url, callback) => {
      console.time('delay')
      fetchUrl(url, callback)
      console.timeEnd('delay')

    }, (err, results) => {
      console.log('\r获取到的数据: \r\n', results)
      res.json(results)
    })

  })
})

app.listen(PORT, (req, res) => {
  console.log('App is listening at port ' + PORT)
})