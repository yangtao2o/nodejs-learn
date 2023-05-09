const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ALGORITHM = "aes-256-ctr";

class MessageCrypto {
  constructor() {
    this.secretKey = "";
  }

  getSecretKey() {
    console.log("this.secretKey", this.secretKey);
    return this.secretKey.toString("hex");
  }

  setSecretKey = (password, salt) => {
    console.debug("setSecretKey", password, salt);
    if (password && salt) {
      this.secretKey = crypto.scryptSync(password, salt, 32);
    }
  };

  encrypt(msg) {
    console.debug("encrypt", msg);

    const secretKey = this.secretKey;
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(ALGORITHM, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(msg), cipher.final()]);

    return {
      iv: iv.toString("hex"),
      content: encrypted.toString("hex"),
    };
  }

  decrypt(hash = {}) {
    console.debug("decrypt", hash?.content);

    if (!hash || !hash.iv || !hash.content) {
      console.error("decrypt hash is error");
      return "";
    }

    const secretKey = this.secretKey;
    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      secretKey,
      Buffer.from(hash.iv, "hex")
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(hash.content, "hex")),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }
}

const myMessageCrypto = new MessageCrypto();
console.log("myMessageCrypto", myMessageCrypto);

myMessageCrypto.setSecretKey("2020-10-20", "U20201020");
console.log("SecretKey", myMessageCrypto.getSecretKey());

const hash = myMessageCrypto.encrypt("2022-11-20");
console.log("hash", hash);
console.log(myMessageCrypto.decrypt(hash));

const secretManager = {
  path: "./minder-auth",
  set(data) {
    if (!fs.existsSync(this.path)) {
      fs.mkdirSync(this.path, {
        recursive: true,
      });
    }
    const dest = path.join(this.path, hash.iv + ".txt");
    fs.writeFileSync(dest, data, "utf8");
  },
  get() {
    if (!fs.existsSync(this.path)) {
      return "";
    }
    const dest = path.join(this.path, hash.iv + ".txt");
    return fs.readFileSync(dest, { encoding: "utf8", flag: "r" });
  },
};

secretManager.set(myMessageCrypto.getSecretKey());
console.log("read secret", secretManager.get());
