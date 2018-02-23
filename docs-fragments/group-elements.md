Nojiko 提供一些原子样式类，用于帮助页面开发人员定义模块与模块之间及模块与容器之间的间距，或是隐藏元素以及处理浮动。

### 关于原子样式类

原子样式类是一种极度抽象的样式类定义，这种类名一般只包含样式语义，而不再有具体的内容语义，一般定义如下：

```css
.mr20 {
    margin-right: 20px;
}

.mb15 {
    margin-bottom: 15px;
}

.fl {
    float: left;
}

.fc {
    *zoom: 1;
    
    &:before, &:after { content: " "; display: table; }
    &:after { clear: both; }
}

.bg-white {
    background-color: #fff;
}

.fg-black {
    color: #444;
}
```

因为这种样式类没有内容语义，因此一般也没有内容限制，使其通用性极高；
而又因为类名定义非常简短，因此只要明白其命名规则，书写起来会极为方便快速：

```html
<nav class="bg-white">
    <ul class="fc">
        <li class="fl mr20 mb15 fg-black">item 1</li>
        <li class="fl mr20 mb15 fg-black">item 2</li>
        <li class="fl mr20 mb15 fg-black">item 3</li>
        <li class="fl mr20 mb15 fg-black">item 4</li>
    </ul>
</nav>
```

如果大量使用这种原始样式类，那基本上就是在使用类名来书写 css 而已，和行内样式无异。
因此行内样式的问题，大多也都存在于原子样式类中，比如没有具体的语义，不方便理解代码，也难以统一修改等。
另外因为需要定义尽可能简短的类名，因此需要定义一份详尽的命名规则，这也会导致相应学习成本及维护成本。

鉴于以上所说的问题，因此建议在正式项目中（尤其是需要后期维护的中长期项目）应尽量避免大量使用原子样式类，
而只是作为一种辅助手段并限定在一个非常小的使用区间内。

只有在类似于活动页、专题页、文档或演示页面这种需要快速实现且后期维护量非常小的项目中才可大量使用。

### nojiko 中的原子样式类

Nojiko 默认提供一组非常小的原子样式类，这组样式类只可用于设置元素内外边距，隐藏元素及设置浮动，并且内外边距也被限定为只有三个长度。

另外，所有的类名都可通过配置变量进行自定义。

#### 内外边距

内外边距的长度值从模块间距的配置变量中获取（`$distance-vertical` 和 `$distance-horizontal`），并基于这两个变量提供三种长度级别，每个长度级别对应不同的类名后缀：

- `[类名]` - 1 倍长度
- `[类名]d` - 2 倍长度
- `[类名]x` - 0.5 倍长度

比如两个变量的值设置如下：

```scss
$distance-vertical: 10px;
$distance-horizontal: 20px;
```

而外边距样式类的类名设置为如下名称：

```scss
$nojiko-el-margin: m;
```

则最终会生成如下 css：

```css
.m {
    margin: 10px 20px;
}

.md {
    margin: 20px 40px;
}

.mx {
    margin: 5px 10px;
}
```

