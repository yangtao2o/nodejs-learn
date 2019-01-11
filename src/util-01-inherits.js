var util = require('util');

function Base() {
  this.name = 'base';
  this.base = '1992';
  this.sayHello = function() {
    console.log('Hello ' + this.name);
  }
}

Base.prototype.showName = function() {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.sayHello();
objBase.showName();

console.log(objBase);

var objSub = new Sub();

// Sub 仅仅继承了Base在原型中定义的函数，构造函数的属性和 sayHello 函数都没有被 Sub 继承
objSub.showName();

// objSub.sayHello();

console.log(objSub);

console.log('isArray: ', util.isArray([]));
console.log('isRegExp: ', util.isRegExp(/^\s$/));
console.log('isDate: ',util.isDate(new Date()));
console.log('isError: ', util.isError(new Error()));
