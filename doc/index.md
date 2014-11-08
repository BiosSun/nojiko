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
