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
