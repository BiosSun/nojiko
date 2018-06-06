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

之后，就可以引入并使用 nojiko 了：

```scss
@import "nojiko/nojiko";
@import "nojiko/variables";

@import "nojiko/scaffolding";
@import "nojiko/elements";
```

## 升级

目前 Nojiko 尚处于开发阶段，因此若要从老版本升级到新版本，请仔细查阅该[更新记录](https://github.com/BiosSun/nojiko/blob/master/CHANGELOG.md)，并对自己项目中的代码进行相应的修改。


## 其它 SASS 库

- [`sass-mq`](https://github.com/sass-mq/sass-mq) 更方便的书写媒体查询样式；
- [`sass-true`](https://github.com/oddbird/true) 对 sass 的混入类及函数做单元测试；