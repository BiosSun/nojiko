
Nojiko 提供了一个 `_debug.scss` 文件，该文件将以 CSS 注释的形式，输出 Variables 中定义的所有配置变量的值，
以方便开发人员了解当前的配置结果。

若需使用，只要引入该文件即可：

```scss
@import "nojiko/sass/debug";
```

之后在所编译出的 CSS 文件的对应位置，将会输出如下注释内容：

```css
/* nojiko-debug

## Variables

### 兼容浏览器

- $support-for-ie6 :: false :: bool
- $support-for-ie7 :: false :: bool
- $support-for-ie8 :: true :: bool

### 目录路径

- $images-path :: "../images" :: string
- $fonts-path :: "../fonts" :: string

... omit ...
```
