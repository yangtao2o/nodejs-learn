# 并发请求处理

```js
const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const morgan = require('morgan')
const url = require('url')

const app = express()
const PORT = process.env.PORT || 8000
const URL = 'https://cnodejs.org'

app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(express.json());

/**
 * 并发请求
 */

app.get('/', (req, res, next) => {
  superagent.get(URL).end((err, sres) => {
    if(err) {
      return console.error(err)
    }
    const topicUrls  = []
    const promises = []
    const $ = cheerio.load(sres.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      const $element = $(element);

      // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
      // 我们用 url.resolve 来自动推断出完整 url，变成
      // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
      const href = url.resolve(URL, $element.attr('href'));
      topicUrls.push(href);
    });
    if(topicUrls.length < 1) return
    topicUrls.slice(0, 5).forEach(urlItem => {
      promises.push(
        new Promise((resolve, reject) => {
          superagent.get(urlItem).end((err, sres) => {
            if(err) {
              return reject(err)
            }
            const $ = cheerio.load(sres.text);
            resolve({
              href: urlItem,
              title: $('.topic_full_title').text().replace(/[\ \r\n]/g,""),
              comment: $('.reply_content').eq(0).text().replace(/[\ \r\n]/g,"")
            })
          })
        })
      )
    })
    Promise.all(promises).then(result => {
      console.log('all-result', result)
      res.json(result)
    }).catch(err => console.error(err))
  })
})

app.listen(PORT, (req, res) => {
  console.log('App is listening at port ' + PORT)
})
```