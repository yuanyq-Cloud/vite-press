# <center>HTML 属性</center>

Def. HTML 中的元素拥有属性（attribute）,这些额外的值可以配置元素或者以各种方式来调整元素的行为，进而满足用户所需的标准。

- **全局属性**

所有 HTML 元素共有的属性；它们可以用于所有元素，即使属性可能对某些元素不起作用，例如 `id, class, autofocus`。相对立的，<meta>中的charset，仅用于在<meta>中申明字符编码。

- **内容属性**


在内容（HTML 代码）中设置的属性，也可以通过JavaScript来读写。

```js
element.getAttribute()
element.setAttribute()
```

在 HTML 中，大多数属性都有两个方面，内容属性和 IDL（接口描述语言）属性。内容属性总是一个字符串，即使里面的值是一个整数。例如，要将` <input> `元素的` maxlength `设置为`42`，你需要在元素上调用` setAttribute("maxlength", "42") `。

- **IDL 属性**（Interface Description Language property）

就是用 JavaScript 操作的属性（property），你可以使用 JavaScript 属性如` element.foo `来设置这些属性。当你需要获取 IDL 属性的值时，IDL 属性总会使用隐含的内容属性的值（可能先经过转换）来返回一个值。同样地，当你设置这个值时，这个值会保存在内容属性中。换句话说，IDL 属性本质上反映了内容属性。**值得注意，HTML attribute 和 IDL property并不总是一一对应。**

- **有趣的属性**

有趣的是，除了上方列出的属性，全局事件处理器（例如 onclick）也可以作为内容属性在所有元素上指定。

```html
<h1 onclick="(event)=>{console.log(event)}">GlobalEventHandlers</h1>
```

所有事件处理器属性都接受字符串值。字符串将用于合成 JavaScript 函数。处理器接收与其 JavaScript 事件处理器对应项相同的参数——大多数处理器只接收一个 event 参数，而 onerror 接收五个参数：`(event,source,lineno,colno,error)`。这意味着你通常可以在属性中使用 event 变量。

- 自定义属性：其实就是IDL属性。
- 布尔值属性：声明了这个属性时，其值为`true`；而未声明时，其值为`false`。

  ```html
  <input type="button" required>    //required为true
  ```

  如果需要将属性设置为 false，应该完全不声明这个属性。
