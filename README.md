# UniApp 重置 `manifest.json` 清单

在 UniApp 中，检测 `src/manifest.json` 是否存在，没有则创建空文件，有则在最后增加空行。

### 本项目初衷是为了解决以下问题：

- [dcloudio/uni-app](https://github.com/dcloudio/uni-app/issues/4839)
- [vite-plugin-uni-manifest](https://github.com/uni-helper/vite-plugin-uni-manifest/pull/24)
- [vite-plugin-uni-pages](https://github.com/uni-helper/vite-plugin-uni-pages/issues/133)

> 需要注意的是，重置 `manifest.json` 会清空配置，如果没有使用 `@uni-helper/vite-plugin-uni-manifest` 请谨慎操作。

### 使用方法：

```bash
npx @waset/uni-reset-manifest
```

or

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "reset-manifest": "npx @waset/uni-reset-manifest"
  }
  // ...
}
```

### 效果：

```yml
# .github/workflows/check.yml
name: Check

on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: pnpm

      - name: Install
        run: pnpm i

      - name: ResetManifest
        run: pnpm run reset-manifest

      - name: Lint
        run: pnpm run lint
```

## 参考文档

- [UniApp 官方文档](https://uniapp.dcloud.io/)
- [@uni-helper/vite-plugin-uni-manifest](https://github.com/uni-helper/vite-plugin-uni-manifest)
