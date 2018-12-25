Nojiko
=======

Nojiko 是一个使用 SCSS 编写的基础工具库，其中包含如下内容：

- 一组工具函数及混入类；
- 一组通用配置变量；
- 一套基础全局样式；
- 以及一套原子样式。

## 安装

1\. 在项目中安装 nojiko：

```bash
$ yarn add nojiko
$ npm install nojiko
```

2\. 配置引入路径：将 `node_modules` 目录添加到 SASS 编译器的 `includePaths` 配置中（当然你也可以根据你的项目自行配置， 但要注意这可能会导致下一步中的引入路径有所不同）。

3\. 按需引入 nojiko：

```scss
@import "nojiko/sass/nojiko";       // 提供 Helpers、Add-ons、List 及 Map 四个分组下所定义的所有函数及混入类

@import "nojiko/sass/variables";    // 提供 Variables 分组下所定义的所有全局配置变量，依赖 nojiko 模块
@import "nojiko/sass/scaffolding";  // 提供 Scaffolding 分组下所定义的一套全局脚手架样式，依赖 variables 模块
@import "nojiko/sass/elements";     // 提供 Elements 分组下所定义的一套原子样式类，依赖 variables 模块
```

## 升级

Nojiko 采用语义化版本控制，并提供了一份详细的 [更新记录](https://github.com/BiosSun/nojiko/blob/master/CHANGELOG.md)，请在升级之前仔细阅读该更新记录。

## 其它 SASS 库

- [`sass-mq`](https://github.com/sass-mq/sass-mq) 更方便的书写媒体查询样式；
- [`sass-true`](https://github.com/oddbird/true) 对 sass 的混入类及函数做单元测试；
