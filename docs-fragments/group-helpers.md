
Helpers 分组提供一些辅助性的函数及混入类，
用于方便地书写某些复杂样式（如 [position](#id--helpers-mixin-position) 混入类），
以及用于一些计算或条件判断操作（如 [is-dark](#id--helpers-function-is-dark) 函数）。

### 示例

```scss
$dialog-bg: #fff;

.dialog {
    @include size(80%, 60%);
    @include position(fixed, 20% 10%, 1);

    background: $dialog-bg;
    color: if(is-light($dialog-bg), #333, #fff);
}
```

输入样式：

```css
.dialog {
    width: 80%;
    height: 60%;
    
    position: fixed;
    top: 20%;
    bottom: 20%;
    left: 10%;
    right: 10%;
    z-index: 1;
    
    background: #fff;
    color: #333;
}
```
