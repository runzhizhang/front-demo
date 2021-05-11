## JQuery框架
$(function(){  对dom的操作函数写在界面上所有dom加载完成之后  })
#### 选择器
格式：$(" 选择器类型写在引号内 与常用的选择器的选择符号相似 ").action(fn)
#### 事件
read click mouceenter mouceleave mouceup moucedown(四种方法分别表示：鼠标进入 离开 松开 按下操作)等等

## 效果实现
#### 隐藏/显现
分别为hide 和 show方法 可以通过使用toggle实现两种方法的切换
这两种方法两个参数，分别为速度和回调函数
#### 淡入或淡出
fadeIn() fadeOut() fadeToggle() fadeTo() -- 淡入 淡出 切换 淡称指定的某种透明，
前三种方法有两种参数，第四种方法有三个参数（speed，透明度，回调函数）
隐藏显现和淡入淡出都是使得元素的display设为none，元素不占空间
#### 滑入滑出
slideDown() slideUp() slideToggle()
#### 动画
animate() 三个参数：动画效果，速度，回调函数
元素的宽高可以为使用show hide toggle这些字样
宽高 可以使用 += 这样的计算符
#### 停止动画
stop() 两个参数（是否清楚动画队列，是否立即执行当前动画）
#### 链
JQuery允许在同一句语句上同时执行多个指令语句（指令之间使用.连接 形成链）

## HTML
1. 获取内容 & 属性值
    text() html() val() -- 三种方法分别为：文本内容 全部内容（包含HTML元素） 表单内容
    使用attr()方法获取属性值
    上面提到的四种方法 不只可以用来获取元素的内容和属性，还可以用来设置元素的内容和属性
2. 添加/删除元素
    append() predend() after() before() -- 在被选元素内之后添加内容，（前），在被选元素外之前添加内容
    删除元素：remove() empty() -- 分别表示：删除被选元素及其子元素、清空被选元素（删除被选元素子元素）
3. CSS
    获取/设置CSS：addClass() removeClass() toggleClass -- 向被选元素添加或删除class属性（可以是多个，空格隔开）、切换
    css() 方法用来获取/设置元素的属性值，当需要设置多个属性的时候，使用{}的形式来设置
4. 尺寸
    元素的宽高问题：width innerWidth outerWidth outerWidth(true) -- 分别为：
    content的宽度、content+padding（不包含border）、content+padding+border、content+padding+border+margin

## 遍历
