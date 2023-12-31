# " Weird Debugging Tricks " from Alan Norbauer's blog

>By using expressions that have side effects in places you wouldn't expect, we can squeeze more functionality out of basic features like conditional breakpoints.

使用有副作用的表达式，从像条件断点这样的基本特性中挤出更多功能。

This page is excerpted from [this blog](https://alan.norbauer.com/articles/browser-debugging-tricks), documents about some of the debugging tricks that have worked for me.

## Logpoints/ Tracepoints

Logpoints are breakpoints that log to the console without pausing execution.

<center><img src="./weird-debugging/logPoint.gif" ></center>

we can use conditional breakpoints to simulate them in any browser.
(Use console.count instead of console.log if you also want a running count of how many times the line is executed.)

### Watch Pane

You can also execute an expression in Watch Pane, e.g. to record a snapshot of Dom tree modification.
Set a DOM mutation breakpoint:

<center><img src="./weird-debugging/subtreeMod.png" ></center>

And then add your watch expression

```js
(window.doms = window.doms || []).push(document.documentElement.outerHTML)
```

<center><img src="./weird-debugging/subtreeMod2.png" ></center>

Now, after any DOM subtree modification, the debugger will pause execution and the new DOM snapshot will be at the end of the window.doms array.

### Tracing Callstacks

Let's say you have a function that shows a loading spinner and a function that hides it, but somewhere in you code you're calling the show metheod without a matching hide call. How can you find the source of the unpaired show call? Use console.trace in a conditional breakpoint  in the show method, run your code, find the last stack trace for the show method and click the caller to go to the code.（假如有个控制加载画面的函数，显示加载动画后再也没有关闭，我们想找出这次调用来源，那么就可以使用console.trace）
[img](tracer)

## Changing Program Behavior

By using expressions that have side effects on program behavior, we can change program behavior on the fly, right in the browser.
For example, you can override the param to the parameter id of the getPerson function.（用条件断点覆写变量）

[img](changing)

Since id=1 evaluates to true, this conditional breakpoint would pause the debugger. To prevent that, append , false to the expression.

## Quick and Dirty Performance Profiling
::: tip
（用console.time对执行耗时进行dirty measurement）
:::
You shouldn't muddy your performance profiling with things like conditional breakpoint evaluation time, but if you want a quick and dirty measurement of how long  something takes to run.

You can use the **console timing API** in conditional breakpoints. In your starting point set a breakpoint with the condition `console.time('label')`, and at the end point set a breakpoint with the condition `console.timeEnd('label')`.



[img](perform.gif)

Everytime the thing you're measuring runs, the browser will log to the console how long it takes.
[img](perform.png)

补充一个不需要断点的方法：

```js
const startTime = performance.now();
/* ... do things for a while ... */
const elapsedTime = performance.now() - startTime;
```

## Using Function Arity(函数的“Arity”是指其期望接收的参数数量)

### Break on Number of Arguments

Only pause when the current function is called with 3 arguments:
```js
arguments.length === 3
// 原文笔误,写成arguments.callee.length
```

Useful when you have an overloaded function that has optional parameters.
[img](arguments.gif)
### Break on Function Arity Mismatch

Only pause when the current function is called with the wrong number of arguments:
```js
(arguments.callee.length) != arguments.length
```
[img](arguments.length.png)

## Using CSS

### Pause based on computed CSS values

e.g. only pause execution when the document body has a red background color:

```js
window.getComputedStyle(document.body).backgroundColor === "rgb(255, 0, 0)"
// 原文的等式右值漏了空格，不生效；值得注意的是，尽管赋值HEX格式颜色，从getComputedStyle返回的格式仍是RGB的。
```

## Automatic Instance IDs

Automatically assign a unique ID to every instance of a class by setting this conditional breakpoint in the constructor:

```js
(window.instances = window.instances || []).push(this)
```

Then to retrieve the unique ID:
```js
window.instances.indexOf(instance)
```
 (e.g. window.instances.indexOf(this) when in a class method)

记录实例到全局,可以无侵入性地跟踪实例的状态，创建了多少个、创建的顺序是什么。

## monitor() class Calls

You can use Chrome’s monitor command line method to easily trace all calls to class methods. E.g. given a class Dog

```js
class Dog {
    bark(count) {
    /* ... */
    }
}
```

If we want to know all calls made to all instances of Dog, paste this into the command line:

```js
var p = Dog.prototype;
Object.getOwnPropertyNames(p).forEach((k) => monitor(p[k]));
```

and you’ll get output in the console:

> function bark called with arguments: 2

You can use debug instead of monitor if you want to pause execution on any method calls (instead of just logging to the console).
[img](chrome-monitor.png)

From a Specific Instance
Chrome
If you don’t know the class but you have an instance:

```js
var p = instance.constructor.prototype;
Object.getOwnPropertyNames(p).forEach((k) => monitor(p[k]));
```

Useful when you’d like to write a function that does this for any instance of any class (instead of just Dog)

## Other useless skill（用处不大的部分）

### Skip Page Load（跳过加载）

Don't pause until 5 seconds after page load:
```js
performace.now() > 5000
```
[img](dontPase.png)

Useful when you want to set a breakpoint but you're only interested in pausing execution after initial page load.

### Skip N Seconds（跳过接下来N秒）

```js
window.baseline = window.baseline || Date.now(), (Date.now() - window.baseline) > 5000
```
Reset the counter from the console anytime you’d like:
```js
window.baseline = Date.now()
```

### Even Calls Only

Only pause every other time the line is executed:
```js
window.counter = window.counter || 0, window.counter % 2 === 0
```

### Break on Sample

Only break on a random sample of executions of the line, e.g. only break 1 out of every 10 times the line is executed: `Math.random() < 0.1`





