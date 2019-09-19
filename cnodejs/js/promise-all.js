/**
 * Promise.all
 * 接收一个 promise对象的数组作为参数
 * 当这个数组里的所有promise对象全部变为resolve或reject状态的时候，它才会去调用 .then 方法。
 * 传递给 Promise.all 的promise并不是一个个的顺序执行的，而是同时开始、并行执行的。
 * 
 * Promise.race 
 * 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。
 */

function getUrl(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onload = () => {
      if(req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = () => {
      eject(new Error(req.statusText))
    }
    req.send()
  })
}

const request = {
  comment: () => {
    return getUrl('https://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
  },
  people: () => {
    return getUrl('https://azu.github.io/promises-book/json/people.json').then(JSON.parse)
  }
}

function main() {
  return Promise.all([request.comment, request.people])
}

main()
  .then((value) => console.log(value))
  .catch((error) => console.error(error))