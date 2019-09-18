/**
 * Promise 进行异步操作
 */

function onReadyPromise() {
  return new Promise((resolve, reject) => {
    const readyState = document.readyState
    if(readyState === 'interactive' || readyState === 'complete') {
      resolve()
    } else {
      window.addEventListener('DOMContentLoaded', resolve)
    }
  })
}

onReadyPromise().then(() => console.log('DOM fully loaded and parsed'))

console.log('==Starting==')