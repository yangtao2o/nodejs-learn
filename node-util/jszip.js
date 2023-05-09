const fs = require("node:fs");
const JSZip = require("jszip");

const getFileBuffer = (file) =>
  fs.existsSync(file) ? fs.readFileSync(file) : null;

/**
 * 读取文件信息
 */
function readFileInfo(source) {
  if (!source) {
    return console.error("source is null");
  }
  const zip = new JSZip();
  zip.loadAsync(getFileBuffer(source)).then(
    (res) => {
      console.log("res", res);
    },
    (e) => {
      console.log(e);
    }
  );
}
const source = "/Users/apple/Downloads/zhiximind_v1.0.0.26_signed.exe";

// readFileInfo(source);
