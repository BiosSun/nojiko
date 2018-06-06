scaffolding 提供了一份非常基础的脚手架样式，用于定义页面全局的盒模型、文字、链接、
背景、分隔线及文本框占位符：

``` scss
@if $default-box-sizing == border-box {
    *,
    *:before, 
    *:after {
        box-sizing: $box-sizing;
    }
}

body {
    font: unquote('#{$font-size-base}/#{$line-height-base}') $font-family;
    color: $text-color;
    background: $background-color;
}

a {
    text-decoration: none;
    color: $link-color;

    &:focus, &:hover {
        color: $link-focus-color;
        text-decoration: underline;
    }
}

hr {
  margin-top: compute-line-height($font-size-base, $line-height-base);
  margin-bottom: compute-line-height($font-size-base, $line-height-base);
  border: 0;
  border-top: 1px solid $line-color;
}

::placeholder {
    color: $placeholder-color;
}
```
