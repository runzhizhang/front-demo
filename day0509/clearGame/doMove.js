/*
    1. dom元素
    2. 属性值
    3. startValue
    4. endValue
    5. 速度
    6. 回调函数
*/
function doMove(dom, domStyle, startValue, endValue, speed, fn){
    clearInterval(dom.timer) //清除之前的定时器
    dom.css(domStyle, startValue + 'px')
    dom.timer = setInterval(function(){
        var stop = false // 判断运动效果是否执行完成
        var value = parseInt(dom.css(domStyle))
        if(value >= endValue){
            stop = true
            // 运动结束
            fn()
            clearInterval(dom.timer)
        }else{
            dom.css(domStyle, value + speed + 'px')
        }
    }, 100)
}