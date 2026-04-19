# 宋科儒个人主页

这是一个基于 Next.js 静态导出的 GitHub Pages 个人主页项目，内容包括：

- 个人介绍
- 技术足迹
- 技术思考文章
- GitHub 仓库展示

## 本地启动

先安装依赖：

```bash
npm install
```

本地开发：

```bash
npm run dev
```

类型检查：

```bash
npm run typecheck
```

生成静态站点：

```bash
npm run build
```

生成后的静态文件会输出到 `out/` 目录。

## GitHub Pages 发布说明

这个仓库已经补上了 GitHub Pages 自动部署工作流，适合直接作为 `keru-s.github.io` 用户主页仓库发布。

当前已经具备的发布条件：

- 已开启静态导出
- 已开启结尾斜杠，适合静态托管
- 图片已使用静态导出兼容方式
- 已补充 GitHub Actions 自动部署工作流
- 会在发布时生成 `.nojekyll`，避免 `_next` 资源被 GitHub Pages 忽略

## 推送后是否能正确展示

如果你的 GitHub 仓库 Pages 来源已经设置为 `GitHub Actions`，那么推送到默认分支后，站点就可以自动构建并发布。

如果还没设置，需要在仓库里确认这一项：

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中把来源切到 `GitHub Actions`

这个仓库名是 `keru-s.github.io`，属于用户主页仓库，所以当前配置下不需要额外的路径前缀，发布后会直接显示在根域名上。

## 内容更新位置

- 首页内容：`app/page.tsx`
- 技术足迹数据：`lib/site-content.ts`
- 文章内容：`content/articles/`
- 文章页：`app/articles/`

## 备注

如果后续要增加自定义域名，可以再补 `CNAME` 文件。
