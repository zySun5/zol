// 1. 获取1楼距离文档顶部的位置
var _top = $('.act_body ul li:nth-child(1)').offset().top;
// 2. 给window注册scroll事件
$(window).scroll(function () {
  // 3. 获取页面卷去的间距
  var v = $(window).scrollTop();
  // 4. 比较页面卷去的间距是否大于等于1楼距离文档顶部的位置
  if (v >= _top) {
    // 是：显示导航条
    $('.info').show();
  } else {
    // 否：隐藏导航条
    $('.info').hide();

  }

});


$('.info').click(function () {

  $('html,body').animate({
    scrollTop: 0
  }, 500);
});


  // 因为每次刷新定时器都会等一秒出现，所以要先调用一次定时器的函数
  outTimeRender()
  setInterval(function(){
    outTimeRender()
  }, 1000);//开启定时器
 
function outTimeRender() {
  // 定时器
var times = document.querySelectorAll('.time');
var nextTimes = ["2019/7/18 00:00:00","2019/7/19 15:00:00","2019/7/19 11:00:00","2019/7/19 12:00:00","2019/7/19 13:00:00","2019/7/20 14:00:00","2019/7/19 15:00:00","2019/7/19 16:00:00","2019/7/19 17:00:00","2019/7/20 10:00:00"]
  for(var i = 0; i < times.length; i++) {
    times[i].innerHTML = clock(nextTimes[i]);
  }
}
function clock(nextTime) {
  var nowTime = new Date();
  var endTime = new Date(nextTime);

  // 获取时间差
  var temp = endTime - nowTime;
  //将来的时间毫秒数-现在的时间毫秒数除以1000，取整得到相差秒数
  
  var second = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
    var day = parseInt(second / 3600 / 24);//得到天数
    var hour = parseInt(second / 3600 % 24);//得到小时数
    var min = parseInt(second / 60 % 60);//得到分钟数
    var s = parseInt(second % 60);//得到秒数
    if (temp == 0) {
      clearInterval(clock);
    }
    if (temp < 0) {
      clearInterval(clock);
      day = 0;
      hour = 0;
      min = 0;
      s = 0;
    }
    day < 10 ? day = "0" + day : day;
    hour < 10 ? hour = "0" + hour : hour;
    min < 10 ? min = "0" + min : min;
    s < 10 ? s = "0" + s : s;
    
    return "剩余时间：" + day + "天" + hour + "小时" + min + "分" + s + "秒";

}



