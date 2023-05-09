const CryptoJS = require("crypto-js");

const str = "hello crypto!";
const md5Value = CryptoJS.MD5(str).toString();
console.log("md5", md5Value, md5Value.length);

const SHA1Value = CryptoJS.SHA1(str).toString();
console.log("SHA1Value", SHA1Value, SHA1Value.length);

const SHA256Value = CryptoJS.SHA256(str).toString();
console.log("SHA256Value", SHA256Value, SHA256Value.length);
