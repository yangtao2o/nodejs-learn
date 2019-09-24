/**
 * Node.js 事件循环
 * Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
 * Node.js 几乎每一个 API 都是支持回调函数的。
 * Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
 * Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
 */

const events = require('events')
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter()

// 绑定 connection 事件处理程序
eventEmitter.on('connection', () => {
  console.log('建立连接...')
  // 触发 dataReceived 事件
  eventEmitter.emit('dataReceived')
})

// 绑定 dataReceived 事件处理程序
eventEmitter.on('dataReceived', () => {
  console.log('接收数据中...')
})

// 触发 connection 事件
eventEmitter.emit('connection')
console.log("数据接收完毕！");
