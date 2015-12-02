Nojiko
=======

Nojiko 是一个使用 SCSS 编写的基础样式库，它提供如下一些内容：

- 一组混入类；
- 一套配置变量；
- 一个重置样式；
- 一个基础全局样式；
- 一套元素样式。

Nojiko 用于辅助开发人员快速开始使用 SCSS 进行样式开发。

## 使用

首先，在项目中安装 nojiko：

```bash
$ bower install nojiko
```

之后，就可以引入并使用 nojiko 了：

```scss
@import "nojiko/nojiko";
@import "nojiko/variables";

@import "nojiko/reset";
@import "nojiko/scaffolding";
@import "nojiko/elements";
```

## 升级

目前 Nojiko 尚处于开发阶段，因此若要从老版本升级到新版本，请仔细查阅该[更新记录](./CHANGELOG.md)，并对自己项目中的代码进行相应的修改。
