var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter;
// 原理是 event 对象注册了事件 some_event 的一个监听器，
// 然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，
// 此时会调用some_event 的监听器
event.on('some_event', function () {
  console.log('some_event 事件被触发');
});

setTimeout(() => {
  event.emit('some_event');
}, 1000);

/**
 * EventEmitter的每个事件由一个事件名和若干个参数组成
 * 对于每个事件，EventEmitter 支持 若干个事件监听器
 * 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
 */
event.on('one_event', function (arg1, arg2) {
  console.log('one_event1:', arg1, arg2);
});
event.on('one_event', function (arg1, arg2) {
  console.log('one_event2:', arg1, arg2);
});

event.emit('one_event', '参数111', 'arg222');