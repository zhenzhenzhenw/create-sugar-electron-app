import path from 'path';

/**
 * desc: 获取文件名称
 * @params string 文件完整名称
 * @return string 文件名称
*/
function getFileName(filename: string) {
  const extname = path.extname(filename)
  const name = path.basename(filename, extname);
  return name;
}

export default getFileName;