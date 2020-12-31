更新记录
=======

*以下带有 [danger] 前缀的为不兼容更新，需要注意。而带有 [fix] 前缀的更新为异常修复，建议尽快更新。*

## 2.0.0 (2021-01-01)

- [danger] 删除 clamp 函数（详细信息请看下面 1.2.0 发布说明）；

## 1.2.0 (2021-01-01)

为支持 CSS 中的 [clamp](https://drafts.csswg.org/css-values-4/#comp-func) 函数，Dart Sass 在其
[1.31.0](https://github.com/sass/dart-sass/commit/02c92aa7cd4e9bc569b94037f87c27d8da23eeeb) 版本中，将 *clamp* 解析为特殊函数；
我们若在 sass 中声明了一个名为 *clamp* 的自定义函数，并使用该版本进行编译，则会抛出异常：`Invalid function name.`。

因此，nojiko 将弃用其 clamp 函数，若您需要，则可以改用 sass 在其官方模块 math 中提供的 clamp 函数。

例如，将如下使用 nojiko 提供的 clamp 函数的代码：

```sass
width: clamp($width, 20px, 30px);
```

改为：

```sass
@use "sass:math";                       // 引入 math 模块
width: math.clamp($width, 20px, 30px);  // 并将 `clamp` 改为 `math.clamp`
```

为帮助你进行迁移，我们提供了这个 nojiko 1.2.0 版本。在进行迁移时，你可以先将 Dart Sass 降级到 1.30.0，并安装 nojiko 1.2.0：

```bash
npm i sass@1.30.0 --save-dev && npm i nojiko@1.2.0
```

在 nojiko 1.2.0 版本中，clamp 函数会在被调用时抛出一个异常，这可以帮助你定位在哪里使用到了它。
待你完成迁移后，你便可以将 Dart Sass 升级回最新版本，并将 nojiko 升级到 2.0.0，在 2.0.0 中，我们完全移除了 clamp 函数。

```bash
npm i sass --save-dev && npm i nojiko@^2.0.0
```

- [danger] 弃用 clamp 函数；

## 1.1.1 (2019-07-14)

- [fix] 修复当设置 default-box-sizing 为 border-box 后，引入 scaffolding 会抛出异常的问题；

## 1.1.0 (2018-12-25)

- 添加 `clamp` 函数，用于限定某个数值在指定的区间内；

## 1.0.0 (2018-06-06)

在该版本中，nojiko 做了较多的破坏性变更，因此请在升级到该版本前仔细阅读修改日志。

### 破坏性变更

#### 1. 浏览器兼容性支持：自该版本开始，Nojiko 将不再支持 IE6 及 IE7

因为从当前的市场统计数据来看，这两个浏览器版本在全球市场份额已降到极低，而且即便是在中国，其总计市场份额也已降到 4% 以下；

另外再加上兼容这两个浏览器版本需要付出极多额外的工作量，而且在支持他们的前提下，也很难放心的大量使用更加先进的技术以满足当前市场中用户日益增高的体验需求；

基于以上考虑，我们认为再继续兼容 IE6 及 IE7 将是一件性价比非常低的事情。

> **升级指南：** 如果你的项目仍需支持 IE6 或 IE7，那么请不要升级到该版本。

#### 2. 浏览器兼容性支持：依然兼容 IE8，但全局配置变量 `$support-for-ie8` 的默认值将被改为 `false`

限于仍有很多用户还在继续使用 Windows XP，联带 IE8 的市场份额也高达 6% 之多，因此 Nojiko 将继续支持 IE8。

但在 Nojiko 中，IE8 已被列为低级别的兼容目标，且随时有可能放弃支持 IE8，因此特将 IE8 的兼容配置变量的默认值改为 `false`。


> **升级指南：** 若你的项目仍需支持 IE8，那么请在引入 nojiko 的 `_variables.scss` 之前，添加如下配置代码：
>
> ``` scss
> $support-for-ie8: true;
> ```

#### 3. 移除 `float` 混入类

因已不再支持 IE6 及 IE7，因此混入类 `float` 也就没有必要存在，故此移除。

> **升级指南：** 使用关键字 `@include float` 检索项目中所有 `.scss` 文件，并将其改为直接使用 css 的 `float` 属性。
>
> 如将如下代码：
> ``` scss
> @include float(left);
> ```
>
> 改为：
> ``` scss
> float: left;
> ```

#### 4. 移除已弃用混入类 `block-formatting-context`

该混入类用于激活元素的块级格式化上下文，但其应用场景非常有限，而且有一些副作用，因此早已于 `0.5.0` 版本中便已声明为 `已弃用` 状态，并声明将在 `1.0.0` 正式版本中移除。

> **升级指南：** 使用关键字 `@include block-formating-context` 检索项目中所有 `.scss` 样式文件，并根据你的使用场景将其更换为一个更好的方案。

#### 5. 移除已弃用混入类 `computed-line-height`

该混入类在 `0.5.8` 版本中更名为 `compute-line-height`，原名称依然保留，但被声明为 `已弃用` 状态，并声明将在 `1.0.0` 正式版本中移除。

> **升级指南：** 使用关键字 `@include computed-line-height` 检索项目中所有 `.scss` 样式文件，并将混入类名称改为 `compute-line-height`。

#### 6. 移除 `_reset.scss`

Nojiko 的重置样式实际上是封装自 [Normalize.css](http://necolas.github.io/normalize.css/)，并在其基础上添加了一些兼容 IE6/7 的代码，另外额外提供了一份清除所有元素内外边距、字号、行高及有序/无序列表符号的「破坏性重置样式」。

因当前已不再支持 IE6 及 IE7，且「破坏性重置样式」也没有太多的普适性，因此 Nojiko 已没有太大的必要提供一份样式重置代码，因此移除。

> **升级指南：** 建议各项目改为使用 Normalize.css，若需要「破坏性重置样式」，那么请自行添加如下代码：
>
> ``` css
> body,
> ul, ol, dl, dd,
> h1, h2, h3, h4, h5, h6, p, pre,
> form, fieldset, legend, input, textarea, select, button,
> blockquote, th, td, hr, article, aside, details,
> figcaption, figure, header, footer, section, hgroup, menu, nav {
>     margin:0;
>     padding:0;
> }
>
>  h1, h2, h3, h4, h5, h6, big, small {
>      font: inherit;
>      font-size: 100%;
>      vertical-align: baseline;
>  }
>
>  ol, ul {
>      list-style: none;
>  }
> ```

#### 7. 移除 rem 支持

这将移除三个部分的内容：

- 混入类 `convert-rem`；
- 混入类 `add-rem-suffix`；
- rem 相关的内外边距原子样式类。

在 Nojiko 中对 rem 的支持做的还不是很好，比如没有提供充分的说明文档、示例代码及单元测试；
对外暴露的接口也缺少足够的普适性。且它需要有配套的 JS 支持，这违背了 Nojiko “作为一个纯样式工具库” 的原则；
因此 Nojiko 中将不再提供对 rem 的支持。

相应的，我们认为这种特定性的功能应该放在一个单独的项目中维护会比较好。

> **升级指南：** 建议自行寻找或编写一个 rem 功能库。
>
> 至于 rem 相关的内外边距原子样式类，可参照如下方式添加补丁代码：
>
> ``` scss
> // 外边距
> // ---------------------------
>
> @include el-margin(null, null, 20rem, 20rem);
>
> @if $nojiko-el-margin-suffix-large {
>     @include el-margin(null, $nojiko-el-margin-suffix-large, 40rem, 40rem);
> }
>
> @if $nojiko-el-margin-suffix-small {
>     @include el-margin(null, $nojiko-el-margin-suffix-small, 10rem, 10rem);
> }
>
>
> // 内边距
> // ---------------------------
>
> @include el-padding(null, null, 20rem, 20rem);
>
> @if $nojiko-el-padding-suffix-large {
>     @include el-padding(null, $nojiko-el-padding-suffix-large, 40rem, 40rem);
> }
>
> @if $nojiko-el-padding-suffix-small {
>     @include el-padding(null, $nojiko-el-padding-suffix-small, 10rem, 10rem);
> }
> ```
>
> 关于 `el-marge` 及 `el-padding` 混入类可以参考文档中 [`Elements`](http://biossun.org/nojiko/#id--elements) 分组下的相关说明。

#### 8. 所有混入类及函数的参数在定义默认值时，不再引用 `_variables.scss` 中所定义的全局配置变量

因为在某些特殊项目中会自行设计一套全局配置变量，而不会使用 nojiko 所默认提供的，因此为了提高 nojiko 中所提供的混入类和函数的普适性，使其能应用在所有项目中，因此提出该约束。

不过目前受该规定影响的只有如下一个函数：

- `compute-line-height`

> **升级指南：** 使用关键字 `compute-line-height("` 检索项目中所有 `.scss` 样式文件，若调用该函数时没有传入参数，或只传入了一个参数，则修改如下：
>
> ``` scss
> compute-line-height($font-size-base, $line-height-base)
> ```
>
> **注意** 在该版本中已移除了具有同样功能的 `computed-line-height` 函数，若你尚未处理该问题，那么需额外检索 `computed-line-height` 函数。

#### 9. 移除盒模型相关内容

`$element-box-maps` 存在与 `$color-maps` 同样的问题，既很难定义出一份足够通用的配置。因此 nojiko 中将不再提供关于盒模型相关的配置，另外配套的一些混入类也随之移除。

相应的，关于组件盒模型的设计、配置及约束，应下移到 UI 库中进行。

相关的移除内容有：

- 混入类 `get-element-box-height-by-name`
- 混入类 `set-element-box-maps`
- 混入类 `element-box`、`element-box-by-map`、`element-box-by-name`、`element-box-by-name-b`、`element-box-by-name-bh`
- 全局配置变量 `$default-element-box-name`
- 全局配置变量 `$element-box-maps`
- 全局配置变量 `$nojiko-el-size`
- 及 `elements-extend.scss` 中尺寸相关的原子样式类；

> **升级指南：** 移除你的项目中这些混入类、配置变量及原子样式类的使用，并根据你的项目自行设计一套更加易用且又要的盒模型约束机制。

#### 10. 修改全局配置变量 `$font-size-large` 的默认值为固定像素值 `18px`，`$font-size-small` 的默认值为 `12px`

之前这两个变量的值都是基于 `$font-size-base` 的值计算而来，但难以得到一个比较好的计算算法，因此简便起见，将其默认值改为固定值。

> **升级指南：** 若你的项目中有修改 `$font-size-base` 的值，但未修改 `$font-size-large` 及 `$font-size-base`，那么请明确为这两个变量指定值。

#### 11. 提供更多的模块间距控制

首先，我们新增了八个全局配置变量：

| 变量 | 类型 | 默认值 | 说明 |
|-----|------|------|------|
| $distance-horizontal-large | `number` | `40px` | 用于设置较大的模块间水平间距值；|
| $distance-horizontal-small | `number` | `10px` |  用于设置较小的模块间水平间距值；|
| $distance-vertical-large | `number` | `40px` | 用于设置较大的模块间垂直间距值；|
| $distance-vertical-small | `number` | `10px` | 用于设置较小的模块间垂直间距值；|
| $nojiko-el-margin-suffix-large | `string` | `-l` | 用于设置 「**较大的外边距**」原子样式类的类名后缀； |
| $nojiko-el-margin-suffix-small | `string` | `-s` | 用于设置 「**较小的外边距**」原子样式类的类名后缀； |
| $nojiko-el-padding-suffix-large | `string` | `-l` | 用于设置 「**较大的内边距**」原子样式类的类名后缀； |
| $nojiko-el-padding-suffix-small | `string` | `-s` | 用于设置 「**较小的内边距**」原子样式类的类名后缀； |

与字体和行高一样，我们认为将模块间的间距控制三个级别是较为合适的，既：普通间距、较大间距及较小间距。

但是在之前的版本中，我们仅通过原子样式类中提供了这三个级别的间距，而且较大间距及较小间距的值是固定为 `$distance-horizontal` 及 `$distance-vertical` 的 2 倍及 0.5 倍，相应的，所添加的类名后缀也强制设置为 `d` 及 `x**，不可配置，而且难以记忆。

为改善这些问题，我们特此提供了以上八个变量。

**而且需要注意的是，为了方便记忆，较大间距及较小间距的原子样式类的类名后缀，我们改为了 `-l` 及 `-s`，既 `large` 及 `small`，
而不再是 `d` 及 `x`。**

> **升级指南：**
>
> 首先，若你的项目中有修改 `$distance-horizontal` 及 `$distance-vertical` 的值，那么请额外为新增的四个配置变量设置值。
>
> 之后，若你希望沿用老的原子样式类的命名后缀，那么请配置相应的全局配置变量为 `d` 及 `x` 即可。

### 新增内容

- 添加 `list-compact` 函数，用于清除列表中所有值为 null 的元素；
- 添加 `hairline-border` 混入类，用于实现更好的 1 物理像素边框效果（但所生成的 css 代码也会更多）；


## 0.7.1

- [fix] 修复状态色配置没有添加 `!default` 声明的问题；

## 0.7.0

- 添加单元测试

## 0.6.3

- [danger] 移除 `color-maps` 配置变量
- [danger] 移除 `set-color-maps` 及 `set-alternative-color-maps` 两个函数
- [fix] `list-slice` 函数在参数有误时，不再抛出异常，而是返回一个空的列表
- 添加 `strip-unit` 函数，用于移除一个数值类型的单位部分
- 添加 `info-color` 配置变量
- 添加 `success-color` 配置变量
- 添加 `warning-color` 配置变量
- 添加 `danger-color` 配置变量
- 添加 `multi-text-overflow-ellipsis` 混入类，用于设置多行溢出时显示省略号
- 添加 `$svg-path` 配置变量，用于定义存放 SVG 文件的目录路径
- `expand-scope` 混入类添加参数 `$position`，用于设置扩展伪元素所用的定位方式
- `expand-scope` 混入类更新参数 `$expand-length`，支持为不同的方向设置不同的值
- `list-first` 函数的 `$list` 参数设置默认值 `null`
- `list-rest` 函数的 `$list` 参数设置默认值 `()`

在这个版本中，我们重新回顾了关于颜色配置相关的一些内容，在 Nojiko 之前的颜色配置中，`$color-maps` 是非常重要的一部分，
我们期望通过它为所有的 UI 组件定义一份通用的色表，这样当某个 UI 组件需要提供不同的样式时，只需要遍历 `$color-maps`，并应用所遍历到的色值即可。
但在思考其实现时，我们发现，定义出一份通用于所有 UI 组件的配色集合是非常困难的事情：要么，我们提出一些规则，UI 组件必须按照这些规则去使用 `$color-maps` 并提供样式；
要么，我们定义出一份非常庞大的 `$color-maps`，它应该能适用于所有的 UI 组件，但其配置和使用将变得非常繁琐，而且也会创建出非常多压根就用不到的样式。

因此，我们决定要在 Nojiko 中移除 `$color-maps`，当然，这仅仅表示配色集合不再是一个「适用于任何情况」的工具，而它本身还是非常好的；
我们建议 UI 组件开发人员可以单独为每一个组件定义一份 $colors-map，通过这种方式，使你的组件样式变成完全可配置的，而不是只能通过配置去修改几个有限的样式，既不能增加，也不能移除使用者所不需要的。

或者，如果你开发了多个 UI 组件，那么可以将其汇集到一个 UI 库中，并在库级别定义一份通用的，适用于该库内所有 UI 组件的 $colors-map。
我们相信，同一个 UI 库内的组件，其风格都是一致的，那么在这个级别定义 $colors-map 应该能更容易地找到一个在「简单」、「方便」与「通用」之间的很好的平衡点。

## 0.6.2

- 优化文档

## 0.6.1

- [danger] 移除元素类的长短类名配置，一律默认使用短类名
- [danger] 将 elements 模块中除内外边距、隐藏元素、左右浮动及清除浮动之外的所有元素类移入到 elements-extend 模块中
- [danger] 去除配置变量 `$nojiko-el-margin-values`，不再允许自定义外边距元素类的值
- [danger] 去除配置变量 `$nojiko-el-padding-values`，不再允许自定义内边距元素类的值

## 0.6.0

- 添加文档

## 0.5.8

- [fix] `computed-line-height` 方法命名有误，将其设置为已弃用状态，并提供一个新的方法：`compute-line-height`；
- [fix] 解决在调用 `computed-line-height` 时，若 `$line-height` 参数有单位但非 px 时，仍进行计算的问题；
- 另外，`computed-line-height` 方法中不再对计算结果进行向下取整；
- 添加 `min-size` 及 `max-size` 两个混入类，用于设置元素的最小尺寸及最大尺寸；
- 添加 `expand-scope` 混入类，用于扩大元素的可点击区域；
- 更新 normalize.css 到 3.0.3；

## 0.5.7

- 增加 rem 支持

## 0.5.6

- 在内外边距元素类中，不再强制设置单位，改为只有当所提供的值没有单位时，才使用默认单位 - px。
- 在内外边距元素中，不再默认提供 0 值，若需要 0 值的内外边距，则必须在 `$nojiko-el-margin-values` 及 `$nojiko-el-padding-values` 列表中进行配置。
- 移除 `$nojiko-el-width-values` 变量的默认配置
- 移除 `$nojiko-el-em-width-values` 变量的默认配置
- 移除 `$nojiko-el-per-width-values` 变量的默认配置

## 0.5.5

- 添加全局变量 $placeholder-color，用于设置占位符颜色
- 在 scaffolding 中设置占位符颜色

## 0.5.1

- **[danger]** 将 _settings.scss 文件的名称改为 _variables.scss
- **[danger]** 将全局变量 `$quiet-text-color` 改为 `$text-color-quiet`
- **[danger]** 将全局变量 `$loud-text-color` 改为 `$text-color-loud`
- 移除 `hide-text` 混入类在支持 ie6，ie7 或 ie8 浏览器时加入的 `overflow: hidden;` 属性

## 0.5.0

- **[danger]** 移除 `is-default` 函数
- **[danger]** 移除 `is-merge` 函数
- **[danger]** 移除 `map-extend` 函数
- **[danger]** 不再强制在宽度元素类中追加宽度为 0 的样式
- **[danger]** 将 `arrows-style` 混入类名称改为 `triangle`
- **[danger]** 将 `$nojiko-el-arrow` 元素类改为 `$nojiko-el-triangle`，其长类名改为 'triangle'
- **[danger]** 移除 `$nojiko-el-block-formatting-context` 元素类
- **[danger]** 将 `$font-size-small` 的默认值改为 `floor($font-size-base * 0.88)`
- `block-formatting-context` 混入类设置为已弃用状态，请不要再使用
- 调整 `inline-block` 混入类，其参数 `$vertical-align` 该为可选值，若调用时不指定，则不设置该属性
- 添加 `list-first` 函数，用于获取列表中的第一个元素
- 添加 `list-rest` 函数，用于获取列表中除第一个元素之外的其它元素
- 添加 `list-slice` 函数，用于截取列表中的子列表
- 添加 `map-deep-get` 函数，用于获取多层嵌套的集合中的某个属性
- 添加 `map-deep-set` 函数，用于设置多层嵌套的集合中的某个属性
- 添加 `text-overflow-ellipsis` 混入类，用于添加单行文字超出时显示省略号的样式
- 添加混入类 `superfine-border-top`、`superfine-border-bottom`、`superfine-border-left`、`superfine-border-right`、`superfine-border-vertical` 及 `superfine-border-horizontal`，用于快速为对应方向添加超细边框
- 在 `exhaustive-reset` 模式下的内外边距清除元素选择器中，移除  `optgroup` 元素，并加入 `pre` 及 `select` 元素
- gulp 的依赖版本更新到 3.9.0
- 不再将所有子文件合并到 _nojiko.scss 文件中，而是改为在该文件中引用

## 0.4.14

- 添加 `superfine-border` 混入类，以在高清屏中实现超细边框
- 在 `exhaustive-reset` 模式下的内外边距清除元素选择器中，移除 `div`、`dt`、`li`、`pre` 及 `code` 元素，并加入 `optgroup` 元素

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
  - 元素类配置变量名 `$nojiko-el-hide` 改为 `$nojiko-el-hidden`
  - 元素类配置变量名 `$nojiko-el-visually-hide` 改为 `$nojiko-el-visually-hidden`
  - 长元素类名 `.hide` 改为 `.hidden`
  - 长元素类名 `.visually-hide` 改为 `.visually-hidden`
  - `.hide` 元素类中的 `display: none;` 添加 `!important`，并添加设置 `visibility: hidden;`
- 添加元素类 `.invisible` 用于将一个元素从视觉及屏幕阅读器中隐藏，但仍保留布局
- 添加 `$images-path` 用于设置图片目录路径
- 添加 `$fonts-path` 用于设置字体目录路径


## 0.4.9

- 更新 normalize.css 到最新的 3.0.2
- 添加 `margin` 混入类
- 添加 `padding` 混入类
- `position` 混入类中的参数的默认值由 false 改为 null

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


