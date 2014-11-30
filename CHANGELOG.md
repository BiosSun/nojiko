更新记录
=======

*以下带有 [danger] 前缀的为不兼容更新，需要注意。而带有 [debug] 前缀的更新建议尽快更新。*

## 0.4.9

- 更新 normalize.css 到最新的 3.0.2
- 添加 margin 混入类
- 添加 padding 混入类
- position 混入类中的参数的默认值由 false 改为 null

## 0.4.8

- **[debug]** 解决在 windows 版本的 node-sass 中，不支持在函数内的 @if 条件语句内使用 !global 标签定义变量，抛出空指针异常的问题

## 0.4.7

- 添加混入类 `opacity`，设置兼容 IE6,7,8 的不透明度
- 添加混入类 `transparent`，设置完全透明
- 添加混入类 `opaque`，设置完全不透明


## 0.4.6

- **[debug]** `$primary-color` 在添加到 `$color-maps` 中的名称有误
- 添加 `block-formatting-context` 混入类，用于给一个元素激活块级格式化上下文
- 添加元类 `.block-formatting-context`（`.bfc`），用于给一个元素激活块级格式化上下文


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
- 添加元类 `.block`（`.db`），设置元素 display 为 block；
- 添加元类 `.inline`（`.di`），设置元素 display 为 inline；
- 添加元类 `.inline-block`（`.dib`），设置元素 display 为 inline-block；


## 0.4.3

- 添加混入类 `set-element-box-by-name-b`，用于在设置元素盒尺寸的同时移除边框。
- 添加混入类 `set-element-box-by-name-bh`，用于在设置元素盒尺寸的同时移除边框及水平外边距。


## 0.4.2

- **[debug]** 外边距元类使用像素值时，外边距都为 0。


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
