const path = require("path");
const fs = require("fs");
const url = require("url");
const cp = require("child_process");
const os = require("os");

const testUrl =
  "https://oss.zhixi.com/attachments/images/20230111/63be4bf469818/2-electron.jpeg?OSSAccessKeyId=LTAI4GGMxpoPVA1biwrE5aA5&Expires=1675663772&Signature=6G%2BT4gppqX0JxyBKEH%2FQ7yBhZzY%3D";

// const result = path.parse(testUrl);
// console.log(result);

// const urlResult = new URL(testUrl);
// console.log("urlResult", urlResult);

// console.log("图片后缀", path.extname(urlResult.pathname));

// const isFileProtocol = (urlPath) => {
//   const { protocol } = new URL(urlPath);
//   return protocol === "file:";
// };

// const filePath =
//   "/Users/apple/Library/Application Support/zhiximind-desktop/minder-file/新建导入图片测试/resources/oneRepZFI9f6xlHzlbhUH.png";
// console.log("isFileProtocol", isFileProtocol(filePath));

function winUpdateExec(sourcePath) {
  console.log("Stating winUpdateExec");
  const res = cp.spawnSync(sourcePath);
  console.log("Ending winUpdateExec", res);
}

const sourcePath =
  "/Users/apple/Desktop/desktop/zhiximind-desktop_2.0.1_x64_2.0.1-build.5.exe";

// winUpdateExec(sourcePath);

/**
 * 给定一个文件名称的一部分，判断其是否存在
 * 存在：若只有一个，直接拿出；否则继续判断，是否最新创建
 * 返回文件完整路径
 */
const appName = "知犀思维导图";
const version = "2.0.1-build.2";
const filePath = "/Volumes";

function getVolumesAppPath(version) {
  // 获取当前目录的所有文件
  const files = fs.readdirSync(filePath);
  console.log("files", files);

  let fileLists = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    const itemPath = path.join(filePath, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory) {
      if (item.indexOf(`${appName} ${version}`) > -1) {
        fileLists.push(itemPath);
      }
    }
  }

  console.log("fileLists", fileLists);
  const getAppNamePath = (itemPath) =>
    itemPath ? path.join(itemPath, `${appName}.app`) : "";

  const appPath = getAppNamePath(fileLists[fileLists.length - 1]);

  console.log("appPath", appPath);
  console.log("appVersionPath", path.dirname(appPath));
  return appPath;
}

// getVolumesAppPath(version);

// fs.appendFile("新建.txt", "Hello", (err) => {
//   console.log(err);
// });

// fs.unlink("新建.txt", (err) => {
//   if (err) throw err;
//   console.log("新建.txt was deleted");
// });

// const fileName = "pc2.0.4主要开发内容及影响.zxm";
// const extname = path.extname(fileName);
// const getFileName = path.basename(fileName, extname);
// console.log("name", getFileName, "extname", extname);

const appInfo = {
  saveLoop: false,
  willClose: false,
  userDataPath: "/Users/apple/Library/Application Support/zhiximind-desktop",
  themeMode: "light",
  _distinct_id: "kx3c0bd1202190d62060707a2f61d4e1c9",
  newUserGuideInfo:
    '[{"position":"home","step":0},{"position":"web","step":0}]',
  userPreference: { closeApp: "3" },
  skipVersion: "3.0.0.0",
  expire_time: "2023-09-20 23:59:59",
};
const logsPath = path.join("logs");
console.log("logsPath", logsPath);
if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsPath, { recursive: true });
}
const msgPath = path.join(logsPath, "message.json");
// fs.writeFile(msgPath, JSON.stringify(appInfo, null, 2), "utf8", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// console.log(
//   JSON.parse(fs.readFileSync(msgPath, { encoding: "utf8", flag: "r" }))
// );

const pathsss =
  "/Users/apple/Library/Application Support/zhiximind-desktop/minder-auth";

const authFiles = fs.readdirSync(pathsss);

for (const authFile of authFiles) {
  console.log("authFile", authFile);
}

// fs.rmdirSync(pathsss, { recursive: true });

// console.log("authFiles", authFiles);

console.log("os hostname", os.hostname());
