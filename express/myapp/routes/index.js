var express = require("express");
var router = express.Router();
const superagent = require('superagent')
const cheerio = require('cheerio')
const url = require('url')

const cnodejsURL = 'https://cnodejs.org'

/* GET home page. */
router.get("/", function(req, res, next) {
  superagent.get(cnodejsURL).end((err, sres) => {
    if (err) {
      return console.error(err);
    }
    const topicUrls = [];
    const promises = [];
    const $ = cheerio.load(sres.text);
    $("#topic_list .topic_title").each(function(idx, element) {
      const $element = $(element);
      const href = url.resolve(URL, $element.attr("href"));

      topicUrls.push(href);
    });
    if (topicUrls.length < 1) return;
    topicUrls.slice(0, 5).forEach(urlItem => {
      promises.push(
        new Promise((resolve, reject) => {
          superagent.get(urlItem).end((err, sres) => {
            if (err) {
              return reject(err);
            }
            const $ = cheerio.load(sres.text);
            resolve({
              href: urlItem,
              title: $(".topic_full_title")
                .text()
                .replace(/[\ \r\n]/g, ""),
              comment: $(".reply_content")
                .eq(0)
                .text()
                .replace(/[\ \r\n]/g, "")
            });
          });
        })
      );
    });
    Promise.all(promises)
      .then(result => {
        console.log("all-result", result);
        // res.send(result);
        
      })
      .catch(err => console.error(err));
    });
    res.render("index", { title: "Express" });
});

module.exports = router;
