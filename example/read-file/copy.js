import fs from 'fs'
import path from 'path'

export function CopyDirectory(src, dest) {
  if (IsFileExist(dest) == false) {
    fs.mkdirSync(dest)
  }
  if (!fs.existsSync(src)) {
    return false
  }
  // console.log("src:" + src + ", dest:" + dest);
  // 拷贝新的内容进去
  var dirs = fs.readdirSync(src)
  dirs.forEach(function (item) {
    var item_path = path.join(src, item)
    var temp = fs.statSync(item_path)
    if (temp.isFile()) {
      // 是文件
      // console.log("Item Is File:" + item);
      fs.copyFileSync(item_path, path.join(dest, item))
    } else if (temp.isDirectory()) {
      // 是目录
      // console.log("Item Is Directory:" + item);
      CopyDirectory(item_path, path.join(dest, item))
    }
  })
}

export function DeleteDirectory(dir) {
  if (fs.existsSync(dir) == true) {
    var files = fs.readdirSync(dir)
    files.forEach(function (item) {
      var item_path = path.join(dir, item)
      // console.log(item_path);
      if (fs.statSync(item_path).isDirectory()) {
        DeleteDirectory(item_path)
      } else {
        fs.unlinkSync(item_path)
      }
    })
    fs.rmdirSync(dir)
  }
}

export function copyDir(src, dist, callback) {
  fs.access(dist, function (err) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist)
    }
    _copy(null, src, dist)
  })

  function _copy(err, src, dist) {
    if (err) {
      callback(err)
    } else {
      fs.readdir(src, function (err, paths) {
        if (err) {
          callback(err)
        } else {
          paths.forEach(function (path) {
            var _src = src + '/' + path
            var _dist = dist + '/' + path
            fs.stat(_src, function (err, stat) {
              if (err) {
                callback(err)
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src))
                } else if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            })
          })
        }
      })
    }
  }
}
