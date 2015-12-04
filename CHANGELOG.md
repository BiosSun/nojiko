更新记录
=======

*以下带有 [danger] 前缀的为不兼容更新，需要注意。而带有 [fix] 前缀的更新为异常修复，建议尽快更新。*

## 0.5.8

- [fix] computed-line-height 方法命名有误，将其设置为已弃用状态，并提供一个新的方法：compute-line-height；
- [fix] 解决在调用 computed-line-height 时，若 $line-height 参数有单位但非 px 时，仍进行计算的问题；
- 另外，computed-line-height 方法中不再对计算结果进行向下取整；
- 添加 min-size 及 max-size 两个混入类，用于设置元素的最小尺寸及最大尺寸；
- 添加 expand-scope 混入类，用于扩大元素的可点击区域；
- 更新 normalize.css 到 3.0.3；

## 0.5.7

- 增加 rem 支持

## 0.5.6

- 在内外边距元素类中，不再强制设置单位，改为只有当所提供的值没有单位时，才使用默认单位 - px。
- 在内外边距元素中，不再默认提供 0 值，若需要 0 值的内外边距，则必须在 $nojiko-el-margin-values 及 $nojiko-el-padding-values 列表中进行配置。
- 移除 $nojiko-el-width-values 变量的默认配置
- 移除 $nojiko-el-em-width-values 变量的默认配置
- 移除 $nojiko-el-per-width-values 变量的默认配置

## 0.5.5

- 添加全局变量 $placeholder-color，用于设置占位符颜色
- 在 scaffolding 中设置占位符颜色

## 0.5.1

- **[danger]** 将 _settings.scss 文件的名称改为 _variables.scss
- **[danger]** 将全局变量 $quiet-text-color 改为 $text-color-quiet
- **[danger]** 将全局变量 $loud-text-color 改为 $text-color-loud
- 移除 hide-text 混入类在支持 ie6，ie7 或 ie8 浏览器时加入的 `overflow: hidden;` 属性

## 0.5.0

- **[danger]** 移除 is-default 函数
- **[danger]** 移除is-merge 函数
- **[danger]** 移除 map-extend 函数
- **[danger]** 不再强制在宽度元素类中追加宽度为 0 的样式
- **[danger]** 将 arrows-style 混入类名称改为 triangle
- **[danger]** 将 $nojiko-el-arrow 元素类改为 $nojiko-el-triangle，其长类名改为 'triangle'
- **[danger]** 移除 $nojiko-el-block-formatting-context 元素类
- **[danger]** 将 $font-size-small 的默认值改为 floor($font-size-base * 0.88)
- block-formatting-context 混入类设置为已弃用状态，请不要再使用
- 调整 inline-block 混入类，其参数 $vertical-align 该为可选值，若调用时不指定，则不设置该属性
- 添加 list-first 函数，用于获取列表中的第一个元素
- 添加 list-rest 函数，用于获取列表中除第一个元素之外的其它元素
- 添加 list-slice 函数，用于截取列表中的子列表
- 添加 map-deep-get 函数，用于获取多层嵌套的集合中的某个属性
- 添加 map-deep-set 函数，用于设置多层嵌套的集合中的某个属性
- 添加 text-overflow-ellipsis 混入类，用于添加单行文字超出时显示省略号的样式
- 添加混入类 superfine-border-top、superfine-border-bottom、superfine-border-left、superfine-border-right、superfine-border-vertical 及 superfine-border-horizontal，用于快速为对应方向添加超细边框
- 在 exhaustive-reset 模式下的内外边距清除元素选择器中，移除  optgroup 元素，并加入 pre 及 select 元素
- gulp 的依赖版本更新到 3.9.0
- 不再将所有子文件合并到 _nojiko.scss 文件中，而是改为在该文件中引用

## 0.4.14

- 添加 superfine-border 混入类，以在高清屏中实现超细边框
- 在 exhaustive-reset 模式下的内外边距清除元素选择器中，移除 div、dt、li、pre 及 code 元素，并加入 optgroup 元素

## 0.4.13

- 添加内边距样式类
- 减少所生成外边距样式类 CSS 的代码量

## 0.4.12

- 背景色元素类添加五个灰度颜色
- **[fix]** 元素类 `background-common` 被设置成了前景色

## 0.4.11

- **[danger]** 修改分隔符元素类的类名，其长类名由 `text-line` 改为 `separator-line`，短类名由 `el` 改为 `sl`
- **[danger]** 修改文字加粗元素类的类名，其短类名由 `b` 改为 `tb`
- **[danger]** 修改文字倾斜元素类的类名，其短类名由 `i` 改为 `ti`
- **[danger]** 修改文字下划线元素类的类名，其短类名由 `u` 改为 `tu`
- **[danger]** 修改默认图片路径为 `"../images"`
- **[danger]** 修改默认字体文件路径为 `"../fonts"`
- 添加删除线元素类 - `$nojiko-el-text-del`，长类名为 `text-del`，短类名为 `.td`
- 添加文本两端对齐元素类 - `$nojiko-el-text-justify`，长类名为 `text-justify`，短类名为 `.tj`
- 添加较大文本元素类 - `$nojiko-el-text-large`，长类名为 `text-large`，短类名为 `.tp`
- 添加较小文本元素类 - `$nojiko-el-text-small`，长类名为 `text-small`，短类名为 `.tm`

## 0.4.10

- **[danger]** 重构隐藏元素类，其修改细节如下：
  - 元素类配置变量名 $nojiko-el-hide 改为 $nojiko-el-hidden
  - 元素类配置变量名 $nojiko-el-visually-hide 改为 $nojiko-el-visually-hidden
  - 长元素类名 .hide 改为 .hidden
  - 长元素类名 .visually-hide 改为 .visually-hidden
  - .hide 元素类中的 `display: none;` 添加 `!important`，并添加设置 `visibility: hidden;`
- 添加元素类 .invisible 用于将一个元素从视觉及屏幕阅读器中隐藏，但仍保留布局
- 添加 $images-path 用于设置图片目录路径
- 添加 $fonts-path 用于设置字体目录路径


## 0.4.9

- 更新 normalize.css 到最新的 3.0.2
- 添加 margin 混入类
- 添加 padding 混入类
- position 混入类中的参数的默认值由 false 改为 null

## 0.4.8

- **[fix]** 解决在 windows 版本的 node-sass 中，不支持在函数内的 @if 条件语句内使用 !global 标签定义变量，抛出空指针异常的问题

## 0.4.7

- 添加混入类 `opacity`，设置兼容 IE6,7,8 的不透明度
- 添加混入类 `transparent`，设置完全透明
- 添加混入类 `opaque`，设置完全不透明


## 0.4.6

- **[fix]** `$primary-color` 在添加到 `$color-maps` 中的名称有误
- 添加 `block-formatting-context` 混入类，用于给一个元素激活块级格式化上下文
- 添加元素类 `.block-formatting-context`（`.bfc`），用于给一个元素激活块级格式化上下文


## 0.4.5

- **[danger]** 将 `set-element-box` 混入类改为 `element-box`；
- **[danger]** 将 `set-element-box-by-map` 混入类改为 `element-box-by-map`；
- **[danger]** 将 `set-element-box-by-name` 混入类改为 `element-box-by-name`；
- **[danger]** 将 `set-element-box-by-name-b` 混入类改为 `element-box-by-name-b`；
- **[danger]** 将 `set-element-box-by-name-bh` 混入类改为 `element-box-by-name-bh`；
- 添加一个 `get-element-box-height-by-name` 函数


## 0.4.4

- **[danger]** 将 `set-alternative-color-map` 函数改为 `set-alternative-color-maps`；
- **[danger]** 将 `alternative-color-map` 配置变量改为 `alternative-color-maps`；
- **[danger]** 将 `set-color-map` 函数改为 `set-color-maps`；
- **[danger]** 将 `set-element-box-map` 函数改为 `set-element-box-maps`；
- **[danger]** 将 `element-box-map` 配置变量改为 `element-box-maps`；
- 添加元素类 `.block`（`.db`），设置元素 display 为 block；
- 添加元素类 `.inline`（`.di`），设置元素 display 为 inline；
- 添加元素类 `.inline-block`（`.dib`），设置元素 display 为 inline-block；


## 0.4.3

- 添加混入类 `set-element-box-by-name-b`，用于在设置元素盒尺寸的同时移除边框。
- 添加混入类 `set-element-box-by-name-bh`，用于在设置元素盒尺寸的同时移除边框及水平外边距。


## 0.4.2

- **[fix]** 外边距元素类使用像素值时，外边距都为 0。


## 0.4.1

- **[danger]** scaffolding 中不再设置链接的 `:visited` 样式。


## 0.4.0

- **[danger]** _nojiko.scss 文件中不再引入 _settings.scss 文件，之后该文件需要使用者在引入 _nojiko.scss 文件后手动引入。
- **[danger]** 移除原先的元素盒模型配置（`$m-padding-vertical`），并提供一个 `set-element-box-map` 方法及 `$default-element-box-name` 与 `$element-box-map` 配置变量。
- **[danger]** 移除如下十个函数：

  - `set-element-box-for-xl`
  - `set-element-box-for-xl-no-border`
  - `set-element-box-for-l`
  - `set-element-box-for-l-no-border`
  - `set-element-box-for-m`
  - `set-element-box-for-m-no-border`
  - `set-element-box-for-s`
  - `set-element-box-for-s-no-border`
  - `set-element-box-for-xs`
  - `set-element-box-for-xs-no-border`

  并提供一些新的函数以替换他们：

  - `set-element-box-my-name`

- 移除 `%arrows-style` 抽象类，并将其其内容合并到 `arrows-style` 混入类中，之后每次调用该混入类时，都会写入一些相同的内容。
- 默认将 `$primary-color` 放入 `$color-maps` 中
- 为 `set-color-map` 及 `set-alternative-color-map` 方法添加 `is-default` 参数，如果改参数值为 `true` 或 `default`，则不会覆盖已存在的颜色配置。
