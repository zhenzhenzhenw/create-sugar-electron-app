## Install

```bash
npm i
```

## Starting Development

```bash
npm run start-renderer-dev
npm run start-main-dev
```

or

```bash
npm run dev
```

## Packaging for Production

```bash
npm run package-mac
npm run package-win
```

## Docs

See our [docs and guides here](https://app.mockplus.cn/app/K_kXEF_jhY2/rp)

## 目录结构
.
├── app
│   ├── common --------------------------------------公用资源
│   │   ├── typings
│   │   └── utils
│   ├── electron-main -------------------------------主进程
│   │   ├── windowCenter ----------------------------窗口中心
│   │   └── electron.ts -----------------------------程序入口
│   ├── electron-render -----------------------------渲染进程
│   │   ├── common
│   │   └── pages -----------------------------------网页
│   ├── service -------------------------------------服务进程
│   └── store ---------------------------------------进程间共享状态
├── config 
│   ├── config.base.js ------------------------------基础环境配置
│   ├── config.dev.js -------------------------------开发环境配置
│   └── config.js -----------------------------------生成环境配置
├── resources ---------------------------------------应用icon
├── webpack.config
│   ├── webpack.config.main.prod.js -----------------主进程打包配置
│   ├── webpack.config.renderer.base.js -------------渲染进程打包基础配置
│   ├── webpack.config.renderer.dev.js --------------渲染进程打包开发配置
│   └── webpack.config.renderer.prod.js -------------渲染进程打包生产配置
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── babel.config.js ----------------------------------全局公共babel配置
├── package-lock.json 
├── package.json
└── tsconfig.json ------------------------------------全局ts配置
