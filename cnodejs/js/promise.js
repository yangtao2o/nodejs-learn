// 返回一个 promise 对象
var promise = new Promise(function(resolve, reject) {

});

/**
 * promise 的流程演练
 */

function asyncFn() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Doing')
    }, 3000)
  })
}

asyncFn().then(function(result) {
  console.log({result})
}).catch(function(error) {
  console.log({error})
})