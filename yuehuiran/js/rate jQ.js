// 点击查看，跳转楼层到查看评论
$('.comment-hd a').on('click', function() {
  // 获取位置
  var v = $('.comment-section h2').offset().top;
  $('html,body').animate({ scrollTop: v }, 200);
})


// 鼠标进入li显示内容
$('.switch').on('mouseenter', 'li', function() {
  var i = $(this).index();
  $(this).addClass('on').siblings().removeClass('on');
  $('.same').eq(i).css({ 'display': 'block' }).siblings().css({ 'display': 'none' });
})



//   <!-- 第五部分 热门手机 -->
// 鼠标进入li。显示下面的div
$('.rank-list').on('mouseenter', 'li', function() {
  // var n = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
})



//  <!-- 第七部分   固定 -->
var topD = $('#ding1').offset().top;
console.log(topD);
$(window).scroll(function() {
  var topW = $(window).scrollTop();
  console.log(topW);
  if (topW >= topD) {
    $('#ding1').addClass('ding1');
  } else {
    $('#ding1').removeClass('ding1');
  }
});



// 左侧固定定位
$('.icon1').on('mouseenter', function() {
  $(this).children('.share').css('display', 'block');
});
$('.icon1').on('mouseleave', function() {
  $(this).children('.share').css('display', 'none');
});
$('.icon4').on('mouseenter', function() {
  $(this).children('.share1').css('display', 'block');
});
$('.icon4').on('mouseleave', function() {
  $(this).children('.share1').css('display', 'none');
});

$('.img2').on('click', function() {
  var v = $('.comment-section h2').offset().top;
  $('html,body').animate({ scrollTop: v }, 200);
});