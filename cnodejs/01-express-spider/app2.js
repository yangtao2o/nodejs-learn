const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const morgan = require('morgan')
const url = require('url')

const app = express()
const PORT = process.env.PORT || 8000
const URL = 'https://cnodejs.org'

app.use(morgan('dev'))

/**
 * 并发请求练习
 */

app.get('/', (req, res, next) => {
  let topicList
  superagent.get(URL).end((err, res) => {
    if(err) {
      return console.error(err)
    }
    const topicUrls  = []
    const $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      const $element = $(element);

      // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
      // 我们用 url.resolve 来自动推断出完整 url，变成
      // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
      const href = url.resolve(URL, $element.attr('href'));
      topicUrls.push(href);
    });

    // console.log({topicUrls})

    Promise.all([topicUrls[0]])
      .then((result) => {
        result.forEach((item) => {
          superagent.get(item).end((err, res) => {
            if(err) {
              return console.error(err)
            }
            topicList = res.text
            console.log({topicList})
          })
        })
      }).catch(err => console.error(err))
  })  
  res.json(topicList)


})

app.listen(PORT, (req, res) => {
  console.log('App is listening at port ' + PORT)
})