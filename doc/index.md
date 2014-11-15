---

layout: default

---


# Nojiko

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
@import "nojiko/settings";

@import "nojiko/reset";
@import "nojiko/scaffolding";
@import "nojiko/elements";
```



## 兼容性

- IE 6+
- Chrome 21+
- Firefox 3.6+
- Safari 5.0+
- Opera 12.0+

## 全局配置

nojiko 精心设计了一组 SCSS 的全局变量，以此来定义项目的文字，配色，尺寸及布局方式。

<table>
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

<tr><th colspan="3">盒尺寸</th></tr>
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







## Setings, Functions, Mixins

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


## reset

Nojiko 使用 normalize 作为 CSS 重置样式。
不过，normalize 已经不再不支持 IE6 和 IE7，考虑到国内现在的情况，
我们又增加了一些重置样式用以支持这两个版本。 -_-!

另外，nojiko 添加了一组 plain 样式，在该重置样式中，将移去所有元素的内外边距，
统一文字大小，行高及字体，并移去列表的项目符号。

```scss
@mixin nojiko-reset($is-plain: false);
```
