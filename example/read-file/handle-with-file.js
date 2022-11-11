import fs from 'fs'
import path from 'path'
import { zip, getZipFiles } from './zip.js'

const __dirname = path.resolve()

const isDirSync = (fillPath) => {
  try {
    const file = fs.statSync(fillPath)
    console.log('file', file, file.isDirectory())
    return file.isDirectory()
  } catch (error) {
    console.log(error)
    return false
  }
}

/**
 * 把解压后的资源写进硬盘
 *
 * @param {Arraybuffer} data
 * @param {String} savePath
 * @returns
 */

export const saveZipFiles = async (data, savePath) => {
  const files = await getZipFiles(data)
  console.log('getZipFiles ', files)

  const commonPath = path.join(__dirname, savePath)
  console.log('commonPath', commonPath)
  if (!fs.existsSync(commonPath)) {
    console.log('create commonPath')
    fs.mkdirSync(commonPath)
  }

  try {
    for (const filename of Object.keys(files)) {
      const current = files[filename]

      const dest = path.join(__dirname, savePath, filename)
      console.log('dest', dest)
      // 如果该文件为目录需先创建文件夹
      console.log('dir', current.dir)
      console.log('fs.existsSync(dest)', fs.existsSync(dest))

      console.log('fs.statSync(path)', fs.statSync(dest).isDirectory())

      if (!fs.existsSync(dest)) {
        if (current.dir) {
          fs.stat(dest, function (err, stats) {
            if (!stats) {
              fs.mkdir(dest, { recursive: true }, (err) => {
                if (err) throw err
              })
            }
          })

          // fs.mkdirSync(dest, {
          //   recursive: true,
          // })
        } else {
          // 把每个文件buffer写到硬盘中
          current
            .async('nodebuffer')
            .then((content) => fs.writeFileSync(dest, content))
        }
      }
    }
    console.log('success')
  } catch (error) {
    console.error('Save error: ', error.message)
    return error
  }
}

// function readDir(obj, nowPath) {
//   let files = fs.readdirSync(nowPath) //读取目录中的所有文件及文件夹（同步操作）
//   files.forEach(function (fileName, index) {
//     //遍历检测目录中的文件
//     console.log(fileName, index) //打印当前读取的文件名
//     let fillPath = nowPath + '/' + fileName
//     let file = fs.statSync(fillPath) //获取一个文件的属性
//     if (file.isDirectory()) {
//       //如果是目录的话，继续查询
//       let dirlist = zip.folder(fileName) //压缩对象中生成该目录
//       readDir(dirlist, fillPath) //重新检索目录文件
//     } else {
//       obj.file(fileName, fs.readFileSync(fillPath)) //压缩目录添加文件
//     }
//   })
// }

export function readLocalFile(url) {
  if (!url) {
    throw new Error('Url param is undefined')
  }

  return new Promise((resolve, reject) => {
    fs.readFile(url, function (err, data) {
      if (err) {
        console.error('readLocalFile Error: ', err)
        return reject(err)
      }
      try {
        zip.loadAsync(data).then((res) => {
          // const utf8decoder = new TextDecoder();
          // const mindData = utf8decoder.decode(res.files['content.json']._data.compressedContent)
          const base = zip.file('content.json').async('string')
          // uint8array base64 string
          // 可以选择想要的类型输出，比如解图用base64，文本string等
          base.then((res) => {
            // res 是文件里的内容，下面可以对内容进行操作
            let data = (res && JSON.parse(res)) || {}
            data.filePath = url
            resolve(data)
          })
        })
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  })
}
