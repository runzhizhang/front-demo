#### 笔记
1. label标签的使用，使用label的for属性将label标签绑定input
    将input标签放在label中，不设置label的for属性 =》label绑定内部的input标签
2. a标签的href属性
    href为空时，链接点击默认进行页面刷新
    取消链接的默认刷新行为：设置href属性为：javascript: void (0)或者javascript:
    (当a链接绑定了点击事件时，取消默认刷新行为)
3. input元素为行内元素，不能直接通过margin为auto的方式来实现居中对齐
4. 设置不同方向的border-width
5. JQuery中input元素的click事件绑定：
    使用click方法进行事件绑定，会失效
    使用$(document).on方法来绑定可解决事件失效的问题 ***
6. JQuery中获取到元素数组arr后，直接使用arr[n]和arr.eq(n)两种方法存在区别
    情景：arr[n].val() 报错：提示，val() not a function
    解决：arr.eq(n).val()
    https://blog.csdn.net/zcy_csdn123/article/details/77884718
7. Move.js 动画库
8. 获取到css属性值，为string数据，可以通过parseInt方法取消后面的单位部分
9. 同步&异步 ： promise的手写 ***