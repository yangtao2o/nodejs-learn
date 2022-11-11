import fs from 'fs'
import path from 'path'

import { saveZipFiles } from './handle-with-file.js'
import { getFiles } from './file-read.js'

import { copyDir } from './copy.js'

function openFile(url) {
  fs.readFile(url, function (err, data) {
    if (err) return

    console.log('feadFile data ', data)
    saveZipFiles(data, 'file-data')
  })
}

// openFile('./放大方兄.zxm')

// copyDir('./file-data', './file-data-copy2', (err) =>
//   console.log('拷贝失败：', err)
// )

// const json = fs.readFileSync('./package.json', { encoding: 'utf8', flag: 'r' })
// console.log('json', json)

// const getImgPath = (id) => {
//   // 实际图片集合
//   const imgFiles = ['b8e398e8-554a-19e5-4592-cbf5753c4593.png', '2.jpg']
//   return imgFiles.find((item) => item === id + path.extname(item))
// }

// const imgpath = getImgPath('b8e398e8-554a-19e5-4592-cbf5753c4593')
// const imgpath2 = getImgPath('2')

// console.log(imgpath, imgpath2)

// const fileLists = getFiles.getFileList('./file-data/resources/')
// console.log(fileLists, 'filelists')

// const imgLists = getFiles.getImageFiles('./file-data/resources/')
// console.log(imgLists, 'imgLists')

// fs.renameSync('./file-data-copy2', './file-data-copy222')

console.log(
  'existsSync',
  fs.existsSync(
    '/Users/apple/Library/Application Support/zhiximind-desktop/minder-attachments/'
  )
)

// fs.writeFileSync(
//   '/Users/apple/Library/Application Support/zhiximind-desktop/minder-attachments/',
//   fs.readFileSync('/Users/apple/Downloads/bg6.jpg')
// )

const copyFile = (src, dist) => {
  console.log('src and dist', src, dist)
  try {
    if (fs.existsSync(src) && fs.existsSync(dist)) {
      return fs.writeFileSync(dist, fs.readFileSync(src))
    }
  } catch (error) {
    console.log(error.message)
  }
  return null
}

const copyFileStream = (src, dist) => {
  if (fs.existsSync(src) && fs.existsSync(dist)) {
    return fs.createReadStream(src).pipe(fs.createWriteStream(dist))
  }
  return null
}
// copyFile(
//   '/Users/apple/Downloads/bg6.jpg',
//   '/Users/apple/Downloads/bg666666.jpg'
// )

copyFileStream('./zip.js', './test.js')
