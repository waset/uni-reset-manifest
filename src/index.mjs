import { existsSync, writeFileSync, readFileSync, appendFileSync, mkdir, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// 获取当前工作目录
const cwd = process.cwd();

// 构建 manifest 文件路径
const srcDir = join(cwd, 'src');
const manifestPath = join(srcDir, 'manifest.json');

if (!existsSync(srcDir)) {
  mkdirSync(srcDir);
}

// 检查是否存在 src/manifest.json 文件，如果不存在则创建一个空的
if (!existsSync(manifestPath)) {
  writeFileSync(manifestPath, '{}\n');
  console.log('已成功创建清单文件');
} else {
  // 如果文件已存在，判断是否有空行，没有则增加空行
  const content = readFileSync(manifestPath, 'utf8');
  const body = content.trim()
  if (body !== '') {
    writeFileSync(manifestPath, `${body}\n`);
    console.log('已成功添加空行');
  }
}
