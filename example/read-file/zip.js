import JSZip from 'jszip'

export const zip = new JSZip()

/**
 * 获取zip文件并解压
 *
 * @param {Arraybuffer} data
 * @returns files
 */
export const getZipFiles = async (data) => {
  // 类型必须为arraybuffer
  const zipData = await JSZip.loadAsync(data)
  return zipData.files
}
