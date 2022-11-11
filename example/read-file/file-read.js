import fs from 'fs'
import { fileTypeFromBuffer } from 'file-type'

export function readFileList(path, filesList) {
  const files = fs.readdirSync(path)

  files.forEach((item) => {
    const stat = fs.statSync(path + item)

    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + item + '/', filesList)
    } else {
      const obj = {} //定义一个对象存放文件的路径和名字
      obj.path = path //路径
      obj.filename = item //名字

      filesList.push(obj)
    }
  })
}

export const getFiles = {
  //获取文件夹下的所有文件
  getFileList: function (path) {
    const filesList = []
    readFileList(path, filesList)
    return filesList
  },
  //获取文件夹下的所有图片
  getImageFiles: function (path) {
    const imageList = []

    this.getFileList(path).forEach(async (item) => {
      const buffer = fs.readFileSync(item.path + item.filename)
      const ms = await fileTypeFromBuffer(buffer)
      console.log(ms)
      ms.mime && imageList.push(item.filename)
    })
    return imageList
  },
}
