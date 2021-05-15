const frontURL = 'https://01d148a4-abf0-4775-8d16-680a2f8282f6.mock.pstmn.io/font'
const backURL = 'https://01d148a4-abf0-4775-8d16-680a2f8282f6.mock.pstmn.io/back'
let frontData = null
let backData = null
$(function () {
  // 数据请求
  $('.header li')[0].className = 'sec'
  $.ajax({
    url: frontURL,
    success: function (data) {
      frontData = JSON.parse(data).list
      render(frontData)
      // 添加事件
      $('.header li').eq(0).click(function () {
        this.className = 'sec'
        $('.header li')[1].className = ''
        render(frontData)
        console.log('front btn')
      })
      $('.header li').eq(1).click(function () {
        this.className = 'sec'
        $('.header li')[0].className = ''
        if (backData) {
          render(backData)
          console.log('back btn')
        }
      })
      $('.listContent').eq(0).mouseover(function () {
        $('.tips')[0].style.display = 'inline-block'
        console.log('over')
      })
      $('.listContent').eq(0).mouseout(function () {
        $('.tips')[0].style.display = 'none'
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
