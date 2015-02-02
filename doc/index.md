---

layout: default

---


# Nojiko

## 简介

Nojiko 是一个使用 SCSS 编写的基础样式库，它提供如下一些内容：

- 一套配置变量；
- 一套函数及混入类；
- 一套重置样式；
- 一套基础全局样式；
- 一套元素样式。

Nojiko 用于辅助开发人员快速开始使用 SCSS 进行样式开发。

### 使用

首先，使用 bower 在你的项目中安装 nojiko：

```bash
$ bower install nojiko
```

之后，在你的 scss 文件中引入并使用它：

```scss
@import "nojiko/nojiko";
@import "nojiko/settings";

@import "nojiko/reset";
@import "nojiko/scaffolding";
@import "nojiko/elements";
```


### 兼容性

- IE 6+
- Chrome 21+
- Firefox 3.6+
- Safari 5.0+
- Opera 12.0+

## 配置变量

nojiko 提供了一组较为通用的全局变量，用于定义项目的兼容性，文字，配色，尺寸及布局方式。

<table>

<thead>
<tr>
<th width="200"><b>变量名称</b></th>
<th><b>说明</b></th>
<th><b>默认值</b></th>
</tr>
</thead>

<tr><th colspan="3">浏览器兼容</th></tr>
<tr>
<td width="200">{% highlight scss %}$support-for-ie6{% endhighlight %}</td>
<td width="300">是否兼容 IE6 浏览器</td>
<td>{% highlight scss %}true{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$support-for-ie7{% endhighlight %}</td>
<td>是否兼容 IE7 浏览器</td>
<td>{% highlight scss %}true{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$support-for-ie8{% endhighlight %}</td>
<td>是否兼容 IE8 浏览器</td>
<td>{% highlight scss %}true{% endhighlight %}</td>
</tr>

<tr><th colspan="3">路径</th></tr>
<tr>
<td width="200">{% highlight scss %}$images-path{% endhighlight %}</td>
<td width="300">图片访问路径</td>
<td>{% highlight scss %}"../images"{% endhighlight %}</td>
</tr>
<tr>
<td width="200">{% highlight scss %}$fonts-path{% endhighlight %}</td>
<td width="300">字体文件访问路径</td>
<td>{% highlight scss %}"../fonts"{% endhighlight %}</td>
</tr>

<tr><th colspan="3">文字</th></tr>
<tr>
<td>{% highlight scss %}$font-family{% endhighlight %}</td>
<td>默认字体集</td>
<td>{% highlight scss %}$FONT-FAMILY-SERIF{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$font-family-monspace{% endhighlight %}</td>
<td>代码字体集</td>
<td>{% highlight scss %}$FONT-FAMILY-FIXED-FONT{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$font-size-base{% endhighlight %}</td>
<td>默认文字大小</td>
<td>{% highlight scss %}14px{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$font-size-large{% endhighlight %}</td>
<td>较大文字大小</td>
<td>{% highlight scss %}ceil($font-size-base * 1.3){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$font-size-small{% endhighlight %}</td>
<td>较小文字大小</td>
<td>{% highlight scss %}ceil($font-size-base * 0.88){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$line-height-base{% endhighlight %}</td>
<td>默认文字行高</td>
<td>{% highlight scss %}1.428571429{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$line-height-large{% endhighlight %}</td>
<td>较大文字行高</td>
<td>{% highlight scss %}1.34{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$line-height-small{% endhighlight %}</td>
<td>较小文字行高</td>
<td>{% highlight scss %}1.5{% endhighlight %}</td>
</tr>

<tr><th colspan="3">配色</th></tr>
<tr>
<td>{% highlight scss %}$gray-darke{% endhighlight %}</td>
<td>深灰色</td>
<td>{% highlight scss %}lighten(#000, 13.5%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$gray-dar{% endhighlight %}</td>
<td>暗灰色</td>
<td>{% highlight scss %}lighten(#000, 20%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$gray{% endhighlight %}</td>
<td>灰色</td>
<td>{% highlight scss %}lighten(#000, 33.5%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$gray-light{% endhighlight %}</td>
<td>淡灰色</td>
<td>{% highlight scss %}lighten(#000, 60%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$gray-lighter{% endhighlight %}</td>
<td>浅灰色</td>
<td>{% highlight scss %}lighten(#000, 93.5%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$primary-color{% endhighlight %}</td>
<td>主体色</td>
<td>{% highlight scss %}#428BCA{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$primary-color{% endhighlight %}</td>
<td>背景色</td>
<td>{% highlight scss %}#FFF{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$text-color{% endhighlight %}</td>
<td>文字颜色</td>
<td>{% highlight scss %}$gray-dark{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$quiet-text-color{% endhighlight %}</td>
<td>次要文字颜色</td>
<td>{% highlight scss %}$gray-light{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$loud-text-color{% endhighlight %}</td>
<td>强调文字颜色</td>
<td>{% highlight scss %}$gray-dark{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$link-color{% endhighlight %}</td>
<td>链接文字颜色</td>
<td>{% highlight scss %}$primary-color{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$link-focus-color{% endhighlight %}</td>
<td>链接得到焦点时的文字颜色</td>
<td>{% highlight scss %}darken($primary-color, 15%){% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$link-visited-color{% endhighlight %}</td>
<td>已访问链接的文字颜色</td>
<td>{% highlight scss %}$link-color{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$line-color{% endhighlight %}</td>
<td>线条颜色</td>
<td>{% highlight scss %}#d7d7d7{% endhighlight %}</td>
</tr>
<tr><th colspan="3">布局</th></td>
<tr>
<td>{% highlight scss %}$page-width{% endhighlight %}</td>
<td>页面宽度</td>
<td>{% highlight scss %}false{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$distance-vertical{% endhighlight %}</td>
<td>模块之间的垂直间距</td>
<td>{% highlight scss %}20px{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$distance-horizontal{% endhighlight %}</td>
<td>模块之间的水平间距</td>
<td>{% highlight scss %}20px{% endhighlight %}</td>
</tr>

<tr><th colspan="3">盒模型</th></tr>
<tr>
<td>{% highlight scss %}$default-box-sizing{% endhighlight %}</td>
<td>全局盒尺寸计算模型</td>
<td>{% highlight scss %}content-box{% endhighlight %}</td>
</tr>
<tr>
<td>{% highlight scss %}$default-element-box-name{% endhighlight %}</td>
<td>默认盒尺寸名称</td>
<td>{% highlight scss %}m{% endhighlight %}</td>
</tr>

<tr><th colspan="3">配色集合 <small>（使用 set-color-map 函数设置）</small></th></tr>
<tr>
<td>主体色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-color-map(primary, $primary-color);
{% endhighlight %}
</td>
</tr>
<tr>
<td>成功状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-color-map(success, #5cb85c);
{% endhighlight %}
</td>
</tr>
<tr>
<td>信息状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-color-map(info, #5bc0de);
{% endhighlight %}
</td>
</tr>
<tr>
<td>警告状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-color-map(warning, #f0ad4e);
{% endhighlight %}
</td>
</tr>
<tr>
<td>危险状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-color-map(danger, #d9534f);
{% endhighlight %}
</td>
</tr>

<tr><th colspan="3">备选配色集合 <small>（使用 set-alternative-color-map 函数设置）</small></th></tr>
<tr>
<td>成功状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-alternative-color-map(success, #dff0d8, #3c763d);
{% endhighlight %}
</td>
</tr>
<tr>
<td>信息状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-alternative-color-map(info, #d9edf7, #31708f);
{% endhighlight %}
</td>
</tr>
<tr>
<td>警告状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-alternative-color-map(warning, #fcf8e3, #8a6d3b);
{% endhighlight %}
</td>
</tr>
<tr>
<td>危险状态色</td>
<td colspan="2">
{% highlight scss %}
color-maps: set-alternative-color-map(danger,  #f2dede, #a94442);
{% endhighlight %}
</td>
</tr>

<tr><th colspan="3">盒尺寸定义集合<small>（使用 set-element-box-map 函数定义）</small></th></tr>
<tr>
<td>普通尺寸（默认尺寸）</td>
<td colspan="2">
{% highlight scss %}
$element-box-map: set-element-box-map(
    $name:                      m,
    $padding-vertical:          6px,
    $padding-horizontal:        12px,
    $border-width:              1px,
    $border-radius:             3px,
    $font-size:                 $font-size-base,
    $line-height:               $line-height-base,
    $is-default:                true
);
{% endhighlight %}
</td>
</tr>
<tr>
<td>较大尺寸</td>
<td colspan="2">
{% highlight scss %}
$element-box-map: set-element-box-map(
    $name:                      l,
    $padding-vertical:          10px,
    $padding-horizontal:        16px,
    $border-width:              1px,
    $border-radius:             3px,
    $font-size:                 $font-size-large,
    $line-height:               $line-height-large,
    $is-default:                true
);
{% endhighlight %}
</td>
</tr>
<tr>
<td>超大尺寸</td>
<td colspan="2">
{% highlight scss %}
$element-box-map: set-element-box-map(
    $name:                      xl,
    $padding-vertical:          13px,
    $padding-horizontal:        22px,
    $border-width:              1px,
    $border-radius:             3px,
    $font-size:                 ceil($font-size-large * 1.2),
    $line-height:               $line-height-large,
    $is-default:                true
);
{% endhighlight %}
</td>
</tr>
<tr>
<td>较小尺寸</td>
<td colspan="2">
{% highlight scss %}
$element-box-map: set-element-box-map(
    $name:                      s,
    $padding-vertical:          4px,
    $padding-horizontal:        9px,
    $border-width:              1px,
    $border-radius:             3px,
    $font-size:                 $font-size-small,
    $line-height:               $line-height-small,
    $is-default:                true
);
{% endhighlight %}
</td>
</tr>
<tr>
<td>超小尺寸</td>
<td colspan="2">
{% highlight scss %}
$element-box-map: set-element-box-map(
    $name:                      xs,
    $padding-vertical:          2px,
    $padding-horizontal:        6px,
    $border-width:              1px,
    $border-radius:             3px,
    $font-size:                 $font-size-small,
    $line-height:               $line-height-small,
    $is-default:                true
);
{% endhighlight %}
</td>
</tr>
</table>


## 函数

## 混入类

### size

使用 size 可以指定一个元素的宽度和高度。

{% highlight scss %}
@mixin size($width, $height: $width);
{% endhighlight %}

示例：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include size(10px);
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    width: 10px;
    height: 10px;
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include size(10px, 20px);
}
{% endhighlight %}
</div>
<div class="code-right">
{% highlight css %}
.box {
    width: 10px;
    height: 20px;
}
{% endhighlight %}
</div>
</div>

如果某参数的值为 false，则不输出对应的属性：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include size(10px, false);
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    width: 10px;
}
{% endhighlight %}
</div>
</div>

### postion

用于快速书写 position 相关样式，可以同时定义 position，left，right，top，bottom 以及
z-index 五个规则。

```SCSS
@mixin position($position: relative,
                $coordinates: false false false false,
                $z-index: false);
```

示例：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include position(absolute, 10px 20px 5px, 100);
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    position: absolute;
    top: 10px;
    right: 20px;
    bottom: 5px;
    left: 20px;
    z-index: 100;

    _zoom: 1;  // if is absolute and support IE6
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include position(fixed, 0 false 0 0, 1000);
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
}
{% endhighlight %}
</div>
</div>

### translucent-bgcolor

```SCSS
@mixin translucent-bgcolor($color, $alpha: false);
```

为元素设置半透明背景色，在低版本的 IE 浏览器中，会使用 filter 实现该效果。

<div class="warning-box">
注意: 因为 IE9 同时支持 alpha 以及 filter，因此在应用 IE Hack 时会导致两个设置相互重叠，
使得最终显示的颜色要比所设置的颜色深很多，不过万幸的是这并非太严重的问题。
</div>


<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include translucent-bgcolor(rgba(0, 0, 0, 0.2));
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    background: rgba(0, 0, 0, 0.2);
    zoom: 1\9;   // if support ie6, ie7 or ie8
    filter: progid:DXImageTransform.Microsoft.Gradient(
        GradientType=0,
        StartColorStr='33000000',
        EndColorStr='33000000'
    );
}
{% endhighlight %}
</div>
</div>


<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
.box {
    @include translucent-bgcolor(#000, 0.2);
}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
.box {
    background: rgba(0, 0, 0, 0.2);
    zoom: 1\9;   // if support ie6, ie7 or ie8
    filter: progid:DXImageTransform.Microsoft.Gradient(
        GradientType=0,
        StartColorStr='33000000',
        EndColorStr='33000000'
    );
}
{% endhighlight %}
</div>
</div>

### font-family

提供四种适用于不同环境的字体集。

英文无衬线字体：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
$FONT-FAMILY-SANS-SERIF
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
"Helvetica Neue", Helvetica, Arial, sans-serif
{% endhighlight %}
</div>
</div>

英文衬线字体：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
$FONT-FAMILY-SERIF
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
Georgia, "Times New Roman", Times, serif
{% endhighlight %}
</div>
</div>

英文衬线字体：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
$FONT-FAMILY-FIXED-FONT
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
Georgia, "Times New Roman", Times, serif
{% endhighlight %}
</div>
</div>


中文无衬线字体：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
$FONT-FAMILY-CHINESE-SANS-SERIF
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
"Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
"Microsoft Yahei", "微软雅黑", Tahoma, Arial, STHeiti,
sans-serif
{% endhighlight %}
</div>
</div>





### text-inputs

提供三个变量供选择所有文本框元素：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-TEXT-INPUTS} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="email"],          input[type="number"],
input[type="password"],       input[type="search"],
input[type="tel"],            input[type="text"],
input[type="url"],            input[type="color"],
input[type="date"],           input[type="datetime"],
input[type="datetime-local"], input[type="month"],
input[type="time"],           input[type="week"] {
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-TEXT-INPUTS-HOVER} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="email"]:hover,
input[type="number"]:hover,
input[type="password"]:hover,
input[type="search"]:hover,
input[type="tel"]:hover,
input[type="text"]:hover,
input[type="url"]:hover,
input[type="color"]:hover,
input[type="date"]:hover,
input[type="datetime"]:hover,
input[type="datetime-local"]:hover,
input[type="month"]:hover,
input[type="time"]:hover,
input[type="week"]:hover {
}
{% endhighlight %}
</div>
</div>


<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-TEXT-INPUTS-FOCUS} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="text"]:focus,
input[type="url"]:focus,
input[type="color"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus {
}
{% endhighlight %}
</div>
</div>


### button-inputs

提供四个变量供选择所有属于 input 的按钮元素：

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-BUTTON-INPUTS} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="button"],
input[type="reset"],
input[type="submit"] {
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-BUTTON-INPUTS-HOVER} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-BUTTON-INPUTS-FOCUS} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="button"]:focus,
input[type="reset"]:focus,
input[type="submit"]:focus {
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
{% highlight scss %}
#{$ALL-BUTTON-INPUTS-ACTIVE} {}
{% endhighlight %}
</div>

<div class="code-right">
{% highlight css %}
input[type="button"]:active,
input[type="reset"]:active,
input[type="submit"]:active {
}
{% endhighlight %}
</div>
</div>

## 附加样式类

附加样式类用于为元素附加一些小的样式设置，比如外边距，宽度，文字颜色，或者隐藏元素等。

示例一、长类名：

```html
<!-- 隐藏元素 -->
<div class="hidden"></div>
<!-- 设置元素为普通尺寸，宽度 100px，文字居中，红色。 -->
<div class="size-m width-100 text-center foreground-red"></div>
```

示例二、短类名：

```html
<!-- 隐藏元素 -->
<div class="h"></div>
<!-- 设置元素为普通尺寸，宽度 100px，文字居中，红色。 -->
<div class="sm w100 tc fg-red"></div>
```

通常使用它们可以方便的为元素设定样式，尤其是在类名设置地非常短的时候，会非常好用，
但需要注意的是，在这种便利之下，却有一些的不好的地方，望用户多多注意。


### 好的方面

1. 方便，快速；
1. 容易调整。

### 常见问题及解答

首先，**附加样式类的优先级都很低，会很容易被其它样式覆盖掉**；比如下面这两种情况，附加样式类就不会起作用：


<div class="code-paratactic">
<div class="code-left">
<strong class="title">HTML</strong>
{% highlight html %}
<a class="button foreground-red"></a>
{% endhighlight %}
</div>

<div class="code-right">
<strong class="title">CSS</strong>
{% highlight css %}
.foreground-red {
    color: #fff;
}

.button {
    color: #444;
}
{% endhighlight %}
</div>
</div>

<div class="code-paratactic">
<div class="code-left">
<strong class="title">HTML</strong>
{% highlight html %}
<ul class="list">
    <li class="item foreground-red"></li>
</ul>
{% endhighlight %}
</div>

<div class="code-right">
<strong class="title">CSS</strong>
{% highlight css %}
.foreground-red {
    color: #fff;
}

.list .item {
    color: #444;
}
{% endhighlight %}
</div>
</div>

这两种情况比较常见，我们分别来说。

第一种情况比较好解决，把 `.foreground-red` 这个类放到 `.button` 下面即可。
不过是否真的要这么做还要看你是怎么理解「附加样式类」的：
如果你认为作为「附加样式」，其本身亦含有「装饰」的含义，那么可以用它覆盖同优先级的其它样式；
但如果你认为附加样式类的语义是抽象的、宽泛的，而相对类似于 `.button` 或 `.item` 这种类，是更加具体的、特殊的，
那么抽象的附加样式类不应该覆盖比它更具体的类的样式，因此你就不能这么做。所以，好好考虑下这个问题吧。

至于第二种情况，`.item` 的优先级高于 `.foreground-red`，因此无论 `.foreground-red` 放到哪里，都会被覆盖。
要解决它，我们需要先探讨如下两个问题：

1. 附加样式是否应该覆盖比它优先级更高的样式？<br />
2. `.item` 的优先级这样设置是对的吗？

对于问题 1，我们可以给出明确的回答：不应该。我们认为优先级更高的样式应该是足够具体的，特殊的，
它们只应该被更加具体及特殊的样式覆盖。

对于第一种情况，

1. 会影响样式模块的完整性
1. 其语义是抽象的，原子性的
1. 会增加 html 的代码量，尤其是使用模板动态生成的 HTML，比如下面这段代码：

   ```html
   <for item in list>
   <div class="width-100 float-left foreground-red">{{item}}</div>
   < endfor >
   ```

   就不如改为：
   ```html
   {% for item in list %}
   <div class="item">{{item}}</div>
   {% endfor %}
   ```
   ```
   .item {
       width: 100px;
       float: left;
       color: red;
   }
   ```

### 配置

每个元素类都对应一个配置变量，变量名称以 `$nojiko-el-` 为前缀，比如用于设置隐藏的元素类的配置变量就是 `$nojiko-el-hidden`。
该变量用于配置元素类的类名称，如果将该变量的值设置为一个字符串值，则该值将作为元素类的类名称，但如果将其设置为 null，则不创建该元素类。

一般的，元素类若想能达到快速使用的目的，其类名就需要尽量的简短，但类名越简短，就越容易会与其它项目发生冲突，
因此 nojiko 提供了两套元素类类名配置方案，一套长类名方案，一套短类名方案。

可以通过修改变量 `$nojiko-el-class-style` 来设置自己所希望使用的类名配置方案，
如果设置为 `long`，则使用长类名方案，如果设置为 `small`，则使用短类名方案。
比如如果将变量 `$nojiko-el-class-style` 设置为 `long`，则隐藏元素类的类名为 `hidden`，
而如果设置为 `small`，则其类名为 `h`。

默认的，nojiko 会使用长类名方案。

除了用于配置类名的变量之外，还有一些其它的配置变量，比如刚才所说用于切换默认命名方案的 `$nojiko-el-class-style` 变量，
这些变量会在之后提到时再详细讲解。

<table>
<thead>
<tr>
<th>变量名</th>
<th>长类名</th>
<th>短类名</th>
<th title="作为类名前缀，最终生成的类名将有多个">前缀 ?</th>
<th>说明</th>
</tr>
</thead>

<tr><th colspan="5">尺寸</th></tr>
<tr>
    <td>$nojiko-el-size</td>
    <td>size-</td>
    <td>s</td>
    <td>是</td>
    <td>元素盒尺寸，可设置值请查看 <a href="#$element-box-maps">$element-box-maps</a></td>
</tr>


<tr><th colspan="5">外边距</th></tr>
<tr>
    <td>$nojiko-el-margin</td>
    <td>margin-</td>
    <td>m</td>
    <td>是</td>
    <td>元素外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-top</td>
    <td>margin-top-</td>
    <td>mt</td>
    <td>是</td>
    <td>元素上外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-bottom</td>
    <td>margin-bottom-</td>
    <td>mb</td>
    <td>是</td>
    <td>元素下外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-left</td>
    <td>margin-left-</td>
    <td>ml</td>
    <td>是</td>
    <td>元素左外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-right</td>
    <td>margin-right-</td>
    <td>mr</td>
    <td>是</td>
    <td>元素右外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-vertical</td>
    <td>margin-vertical-</td>
    <td>mv</td>
    <td>是</td>
    <td>元素垂直外边距</td>
</tr>
<tr>
    <td>$nojiko-el-margin-horizontal</td>
    <td>margin-horizontal-</td>
    <td>mh</td>
    <td>是</td>
    <td>元素水平外边距</td>
</tr>


<tr><th colspan="5">宽度</th></tr>
<tr>
    <td>$nojiko-el-width</td>
    <td>width-</td>
    <td>w</td>
    <td>是</td>
    <td>元素宽度</td>
</tr>


<tr><th colspan="5">隐藏</th></tr>
<tr>
    <td>$nojiko-el-hidden</td>
    <td>hidden</td>
    <td>h</td>
    <td>否</td>
    <td>隐藏元素</td>
</tr>
<tr>
    <td>$nojiko-el-visually-hidden</td>
    <td>visually-hidden</td>
    <td>hv</td>
    <td>否</td>
    <td>仅视觉上隐藏该元素，在屏幕阅读器中依然显示。</td>
</tr>
<tr>
    <td>$nojiko-el-invisible</td>
    <td>invisible</td>
    <td>hi</td>
    <td>否</td>
    <td>隐藏元素，但保留布局。</td>
</tr>

<tr><th colspan="5">浮动</th></tr>
<tr>
    <td>$nojiko-el-float-left</td>
    <td>float-left</td>
    <td>fl</td>
    <td>否</td>
    <td>元素左浮动</td>
</tr>
<tr>
    <td>$nojiko-el-float-right</td>
    <td>float-right</td>
    <td>fr</td>
    <td>否</td>
    <td>元素右浮动</td>
</tr>
<tr>
    <td>$nojiko-el-clear-float</td>
    <td>clear-float</td>
    <td>fc</td>
    <td>否</td>
    <td>清除元素内部浮动</td>
</tr>

<tr><th colspan="5">颜色</th></tr>
<tr>
    <td>$nojiko-el-background-color</td>
    <td>background-</td>
    <td>bg-</td>
    <td>是</td>
    <td>背景色</td>
</tr>
<tr>
    <td>$nojiko-el-foreground-color</td>
    <td>foreground-</td>
    <td>fg-</td>
    <td>是</td>
    <td>前景色（文字颜色）</td>
</tr>

<tr><th colspan="5">元素显示方式</th></tr>
<tr>
    <td>$nojiko-el-dispay-block</td>
    <td>block</td>
    <td>db</td>
    <td>否</td>
    <td>以块级元素显示</td>
</tr>
<tr>
    <td>$nojiko-el-dispay-inline</td>
    <td>inline</td>
    <td>di</td>
    <td>否</td>
    <td>以行内元素显示</td>
</tr>
<tr>
    <td>$nojiko-el-dispay-inline-block</td>
    <td>inline-block</td>
    <td>dib</td>
    <td>否</td>
    <td>以行内块级元素显示</td>
</tr>
<tr>
    <td>$nojiko-el-dispay-formatting-content</td>
    <td>block-formatting-context</td>
    <td>bfc</td>
    <td>否</td>
    <td>触发元素 BFC 特性</td>
</tr>

<tr><th colspan="5">文字对齐</th></tr>
<tr>
    <td>$nojiko-el-text-left</td>
    <td>text-left</td>
    <td>tl</td>
    <td>否</td>
    <td>文字左对齐</td>
</tr>
<tr>
    <td>$nojiko-el-text-right</td>
    <td>text-right</td>
    <td>tr</td>
    <td>否</td>
    <td>文字右对齐</td>
</tr>
<tr>
    <td>$nojiko-el-text-center</td>
    <td>text-center</td>
    <td>tc</td>
    <td>否</td>
    <td>文字居中对齐</td>
</tr>

<tr><th colspan="5">文字样式</th></tr>
<tr>
    <td>$nojiko-el-text-bold</td>
    <td>text-bold</td>
    <td>tb</td>
    <td>否</td>
    <td>文字加粗</td>
</tr>
<tr>
    <td>$nojiko-el-text-italic</td>
    <td>text-italic</td>
    <td>ti</td>
    <td>否</td>
    <td>文字倾斜</td>
</tr>
<tr>
    <td>$nojiko-el-text-underline</td>
    <td>text-underline</td>
    <td>tu</td>
    <td>否</td>
    <td>文字下划线</td>
</tr>
<tr>
    <td>$nojiko-el-text-del</td>
    <td>text-del</td>
    <td>td</td>
    <td>否</td>
    <td>文字删除线</td>
</tr>
<tr>
    <td>$nojiko-el-text-large</td>
    <td>text-large</td>
    <td>tp</td>
    <td>否</td>
    <td>较大的文字</td>
</tr>
<tr>
    <td>$nojiko-el-text-small</td>
    <td>text-small</td>
    <td>tm</td>
    <td>否</td>
    <td>较小的文字</td>
</tr>

<tr><th colspan="5">其它</th></tr>
<tr>
    <td>$nojiko-el-text-overflow</td>
    <td>text-overflow</td>
    <td>to</td>
    <td>否</td>
    <td>元素内文本强制单行显示，且内容溢出时显示省略号（需为元素指定宽度）</td>
</tr>
<tr>
    <td>$nojiko-el-separator-line</td>
    <td>separator-line</td>
    <td>sl</td>
    <td>否</td>
    <td>包含一个字符 '|' 的元素，通常用于分隔其他行内元素</td>
</tr>
<tr>
    <td>$nojiko-el-arrow</td>
    <td>arrow</td>
    <td>ar</td>
    <td>是</td>
    <td>实心小三角箭头</td>
</tr>
</table>



### 尺寸

#### $nojiko-el-size

长类名：size-<br>
短类名：s

该元素类用于设置元素的盒尺寸，其可设置值从 `$element-box-maps` 中取得。

源代码：

```scss
@each $k, $v in $element-box-maps {
    .#{$nojiko-el-size}#{$k}    { @include element-box-by-name($k);    }
    .#{$nojiko-el-size}#{$k}-b  { @include element-box-by-name-b($k);  }
    .#{$nojiko-el-size}#{$k}-bh { @include element-box-by-name-bh($k); }
}
```

### 外边距

#### $nojiko-el-margin

长类名：margin-
短类名：m

#### $nojiko-el-margin-top

长类名：margin-top-
短类名：mt

#### $nojiko-el-margin-right

长类名：margin-right-
短类名：mr

#### $nojiko-el-margin-left

长类名：margin-left-
短类名：ml

#### $nojiko-el-margin-bottom

长类名：margin-bottom-
短类名：mb



## reset

Nojiko 使用 normalize 作为 CSS 重置样式。
不过，normalize 已经不再不支持 IE6 和 IE7，考虑到国内现在的情况，
我们又增加了一些重置样式用以支持这两个版本。 -_-!

另外，nojiko 添加了一组 plain 样式，在该重置样式中，将移去所有元素的内外边距，
统一文字大小，行高及字体，并移去列表的项目符号。

```scss
@mixin nojiko-reset($is-plain: false);
```
