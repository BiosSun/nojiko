Nojiko
=======

Nojiko 是一个使用 SCSS 编写的基础工具库，其中包含如下内容：

- 一组工具函数及混入类；
- 一组通用配置变量；
- 一套基础全局样式；
- 以及一套原子样式。

## 使用

首先，在项目中安装 nojiko：

```bash
$ yarn add nojiko
```

之后，便可引入并使用 nojiko：

```scss
@import "nojiko/nojiko";       // 提供 Helpers、Add-ons、List 及 Map 四个分组下所定义的所有函数及混入类

@import "nojiko/variables";    // 提供 Variables 分组下所定义的所有全局配置变量
@import "nojiko/scaffolding";  // 提供 Scaffolding 分组下所定义的一套全局脚手架样式
@import "nojiko/elements";     // 提供 Elements 分组下所定义的一套元子样式类相关的全局配置变量、混入类及样式
```

## 升级

Nojiko 采用语义化版本控制，并提供了一份详尽的 [更新记录](https://github.com/BiosSun/nojiko/blob/master/CHANGELOG.md)，因此请在升级之前仔细阅读该更新记录，尤其是在升级到一个新的大版本号时。



## 其它 SASS 库

- [`sass-mq`](https://github.com/sass-mq/sass-mq) 更方便的书写媒体查询样式；
- [`sass-true`](https://github.com/oddbird/true) 对 sass 的混入类及函数做单元测试；
