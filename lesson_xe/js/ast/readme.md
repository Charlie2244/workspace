<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

DOM 树  AST Tree Abstract  
{
 tag: 'div'
}

对象字面量, 表达能力
JSON 描述一下
{
  name:'换',
  sex:'男'
}
html document  什么关系？

- URL 输入 打开页面后，发生了什么？
 download  index.html  html 标签
 1. 空白页面 背后发生了什么？
 启动了一个tab, 进程2 (主进程)
 2. window.url = http://127.0.0.1:5500/lesson_xe/js/ats/index.html
 html  文档标记语言  
 - tab 主进程  url,
 启动一个网络请求 进程2 url 127.0.0.1/ html 文件
 - 渲染页面进程
 web应用 也是多进程架构   
 当我们用chrome 打开页面的时候 
 启动4个进程  应用进程（pid 计算及资源调用的最小单元） 浏览器运行
 tab 负责一次页面渲染需要的 主进程
 两个子进程 Network Service http 请求 200
 GPU 计算 高速 css绘制

 Gpu 加速  chrome 为了让页面加快，使用GPU来绘制页面

 html 文本  text/html

 将 文本 -> dom 对象 内存里面 .... 浏览器怎么写的
 chrome v8 引擎
 BOM Browser Object Model
 DOM Document Object Model

 abstract syntax 抽象语法树

 api, 把所有的css 都查出来
 document.getElementByTagName('link')

了解页面的生成过程, 浏览器,操作系统中的应用,进程来分阶段理解它
text/html html 文本, 转变成为 js document 
浏览器不知道怎么现实HTML, 
html -> json AST
dom bom stylesheets
 
