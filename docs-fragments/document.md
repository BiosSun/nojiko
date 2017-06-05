Nojiko 是一个使用 SCSS 编写的基础样式库，其中包含如下内容：

- 一组工具函数及混入类；
- 一组通用配置变量；
- 一套重置样式；
- 一套基础全局样式；
- 以及一套原子样式。

Nojiko 希望能为使用 SCSS 的开发人员提供一些帮助：帮助大家能更快，更方便地编写出更好的样式。

作为一个基础样式库，Nojiko 只提供样式相关内容，没有任何 JS，也不会对应用样式的元素做任何要求。

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

目前 Nojiko 尚处于开发阶段，因此若要从老版本升级到新版本，请仔细查阅该[更新记录](https://github.com/BiosSun/nojiko/blob/master/CHANGELOG.md)，并对自己项目中的代码进行相应的修改。
