效果图：京东官网图片效果 鼠标悬浮展示特效

1. 静态效果实现
    细节点：
    1.1 组件点击伴随着跳转 -- 将整个组件放在a标签
    1.2 组件悬浮的时候显示为手的形状 而不是鼠标 -- 使用a标签 鼠标悬浮时默认情况是手的形状
    1.3 li之间没有分割 -- 加入阴影效果
    1.4 文字的默认下划线是a标签的默认效果
    1.5 悬浮时 文字不再居中
    1.6 鼠标悬浮在那个div上 让那个div的class为on -- 使用jQuery库来实现

    不懂之处：
    ① href和src区别：前者：是超文本引用 建立元素和文本之间的练习 常用的是link a等元素 遇到这类元素，浏览器会进行并行下载文档 并不会停止HTML文档的解析
    后者：资源的嵌入，常用的标签 script和img 遇到这类标签 浏览器会等到资源加载完成之后再继续解析
    ② 
2. 添加动态效果