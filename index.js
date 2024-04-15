import { existsSync, writeFileSync, readFileSync, appendFileSync } from 'fs';

// 检查是否存在 src/manifest.json 文件，如果不存在则创建一个空的
if (!existsSync('src/manifest.json')) {
  writeFileSync('src/manifest.json', '{}');
  console.log('已成功创建清单文件');
} else {
  // 如果文件已存在，判断是否有空行，没有则增加空行
  const content = readFileSync('src/manifest.json', 'utf8');
  if (content.trim() !== '') {
    appendFileSync('src/manifest.json', '\n');
    console.log('已成功添加空行');
  }
  console.log('成功格式化');
}
