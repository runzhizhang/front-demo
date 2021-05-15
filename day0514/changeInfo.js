const frontURL = 'https://01d148a4-abf0-4775-8d16-680a2f8282f6.mock.pstmn.io/font'
const backURL = 'https://01d148a4-abf0-4775-8d16-680a2f8282f6.mock.pstmn.io/back'
let frontData = null
let backData = null
let dataList = null // 渲染的数据
$(function () {
  // 数据请求
  $('.tips')[0].style.display = 'none'
  $('.header li')[0].className = 'sec'
  $.ajax({
    url: frontURL,
    success: function (data) {
      frontData = JSON.parse(data).list
      dataList = frontData
      render(frontData)
      // 添加事件
      $('.header li').eq(0).click(function () {
        this.className = 'sec'
        $('.header li')[1].className = ''
        dataList = frontData
        render(dataList)
      })
      $('.header li').eq(1).click(function () {
        this.className = 'sec'
        $('.header li')[0].className = ''
        if (backData) {
          dataList = backData
          render(dataList)
        }
      })
      let listContent = $('.listContent').eq(0)
      let tips = $('.tips')[0]
      let h3 = $('.tips h3')[0]
      let li0 = $('.tips li')[0]
      let li1 = $('.tips li')[1]
      let li2 = $('.tips li')[2]
      listContent.mouseover(function (e) {
        console.log('over')
        // 通过判断鼠标距离页面顶部的位置来确定鼠标点在哪个li上
        console.log(e.target.offsetTop)
        let index = parseInt((e.target.offsetTop - 199) / 30)
        h3.innerHTML = dataList[index].company
        li0.innerHTML = dataList[index].recruitingNumbers
        li1.innerHTML = dataList[index].workingLocation
        li2.innerHTML = dataList[index].workExperience
        // 设置tips显示的位置
        tips.style.display = 'inline-block'
        tips.style.top = (e.target.offsetTop + 10) + 'px'
        console.log(e)
        tips.style.left = (e.target.offsetLeft + 85) + 'px'
      })
      listContent.mouseout(function () {
        tips.style.display = 'none'
        console.log('out')
      })
    }
  })
  $.ajax({
    url: backURL,
    success: function (data) {
      backData = JSON.parse(data).list
    }
  })
  function render (dataList) { // data数组形式的数据
    let listContent = $('.listContent')[0]
    if (dataList) {
      // 页面渲染之前清空
      listContent.innerHTML = ''
      // 页面渲染
      for (let i = 0; i < dataList.length; i++) {
        let node = document.createElement('li')
        let context = document.createTextNode(dataList[i].title)
        node.appendChild(context)
        listContent.appendChild(node)
      }
    }
  }
})
