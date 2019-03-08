var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
  console.log('监听器 listener1 执行完毕！');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行完毕！');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器 监听连接事件');

eventEmitter.emit('connection');

// 移除绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器 监听连接事件');

console.log('Over!');

