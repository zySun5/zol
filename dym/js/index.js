// 功能1 进入‘更多’，出现隐藏盒子 

$('#m1').mouseenter(function() {
  console.log($('.more_list'))
  $('.more_list')
    .show();
});
$('#m1').mouseleave(function() {
  console.log($('.more_list'))
  $('.more_list')
    .hide();
});
// 功能1.2 进入网页导航出现隐藏盒子
$('.wydh').mouseenter(function() {
  console.log($('.wydh'));
  $('.sitemap').show();
});
$('.wydh').mouseleave(function() {
  console.log($('.wydh'));
  $('.sitemap').hide();
});
// 功能2 鼠标进入导航栏出现下拉菜单
$('.nav>li').mouseenter(function() {
  console.log($(this));
  $(this).children('ul').slideDown(500);
});
$('.nav>li').mouseleave(function() {
  console.log($(this));
  $(this).children('ul').slideUp(500)
    .siblings('ul');
});
//功能3 固定编辑推荐

var topD = $('.recommend').offset().top;
console.log(topD);
$(window).scroll(function() {
  var topW = $(window).scrollTop();
  console.log(topW);
  if (topW >= topD) {
    $('.recommend').addClass('ding');
  } else {
    $('.recommend').removeClass('ding');
  }
});
// 功能4 本周软件鼠标进入显示
$('.tab-nav>li').mouseenter(function() {
  var i = $(this).index();
  $('.tab-list  img').eq(i).css({ 'display': 'block' })
    .siblings().css({ 'display': 'none' });
  $(this).children('span').addClass('hengxian').siblings().removeClass('hengxian');

});
$('.tab-nav>li').mouseleave(function() {
  $(this).children('span').removeClass('hengxian');

});
// 功能4 回到顶部
var _top = $('.hot_tab').offset().top;
$(window).scroll(function() {
  var n = $(window).scrollTop();
  if (_top <= n) {
    $('.tD').show();
  } else {
    $('.tD').hide();
  }
});
$('.dingbu').click(function() {
  $('html,body').animate({ scrollTop: 0 }, 500);
});