const crypto = require("crypto");

/**
 * 加密解密
 */

// 哈希值计算 crypto.Hash
// 使用固定的秘语Secret
const hash = crypto.createHash("sha256");

hash.update("some data to hash");
console.log(hash.digest("hex"));

// 可变哈希计算 crypto.Hmac
// 可以自定义的秘语Secret
const hmac = crypto.createHmac("sha256", "a secret");

hmac.update("some data to hash");
console.log(hmac.digest("hex"));

// 对称加密

const algorithm = "aes-192-cbc";
const password = "2020-10-20"; // 注册时间
const saltValue = "U20201020"; // 用户id
// Use the async `crypto.scrypt()` instead.
const key = crypto.scryptSync(password, saltValue, 24);
console.log("key", key);
// Use `crypto.randomBytes` to generate a random iv instead of the static iv
// shown here.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("2022-11-20", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

// 对称解密
const decipher = crypto.createDecipheriv(algorithm, key, iv);
// Encrypted using same algorithm, key and iv.
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
