const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const listener1 = () => {
  console.log('监听器1启动')
}
const listener2 = () => {
  console.log('监听器2启动')
}

myEmitter.on('event', listener1)
myEmitter.on('event', listener2)

let listeners = myEmitter.listenerCount('event')
console.log(`现在有${listeners}个监听器正在监听事件`)

myEmitter.emit('event')

myEmitter.off('event', listener1)
console.log('监听器1已被移除')

myEmitter.emit('event')

listeners = myEmitter.listenerCount('event')
console.log(`现在有 ${listeners} 个监听器正在监听事件`)

console.log('End!')





