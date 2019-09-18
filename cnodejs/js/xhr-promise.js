/**
 * 创建 XHR 的 promise 对象
 * 用 new Promise 方法创建 promise 对象
 * 用 .then 或 .catch 添加 promise 对象的处理函数
 * 
 * Promise.resolve 将传递给它的参数填充（Fulfilled）到promise对象后并返回这个promise对象
 */

function getURL(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onload = () => {
      if(req.status == 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = () => reject(new Error(req.statusText))
    req.send()
  })
}

getURL('http://httpbin.org/get').then(value => {
  console.log(value)
}).catch(error => {
  console.error(error)
})

getURL('http://httpbin.org/status/500').then(function onFulfilled(value){
  console.log(value);
}).catch(function onRejected(error){ 
    console.error(error);
});

Promise.resolve(42);
Promise.reject(new Error("出错了"))