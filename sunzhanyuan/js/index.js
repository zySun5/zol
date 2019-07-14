// 手机排行榜
$('.mobile-wrap .sidebar .rank-list').on('mouseenter', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
});

// 鼠标到本月销量最高切换tab
$('.mt20 .section-tab').on('mouseenter', 'li', function() {
    var i = $(this).index();
    $(this).addClass('active')
        .siblings('li').removeClass('active');
    $('.mt20 .new-launch').eq(i).css({ 'display': 'block' })
        .siblings('.new-launch').css({ 'display': 'none' });

});
// 中间切换tab
$('.main-box.fr .section .section-tab').on('mouseenter', 'li', function() {
    var i = $(this).index();
    $(this).addClass('active')
        .siblings('li').removeClass('active');
    $('.main-box.fr .headline-news-section').eq(i).css({ 'display': 'block' })
        .siblings('.main-box.fr  .headline-news-section').css({ 'display': 'none' });
});
// 左边栏切换tab
$('#video_1802 .switc').on('mouseenter', 'li', function() {
    var i = $(this).index();
    console.log($(this));
    $(this).addClass('active')
        .siblings('li').removeClass('active');
    $('#video_1802 .side-box').eq(i).css({ 'display': 'block' })
        .siblings('#video_1802  .side-box').css({ 'display': 'none' });
});
// 左边栏切换tab
$('#bbs_ask_1802 .switc').on('mouseenter', 'li', function() {
    var i = $(this).index();
    console.log($(this));
    $(this).addClass('active')
        .siblings('li').removeClass('active');
    $('#bbs_ask_1802 .side-box').eq(i).css({ 'display': 'block' })
        .siblings('#bbs_ask_1802  .side-box').css({ 'display': 'none' });
});


// 鼠标进入轮播图显示左右按钮
$('.swiper-container').on('mouseenter', function() {
    $('.swiper-button-prev').css({ 'display': 'block' });
    $('.swiper-button-next').css({ 'display': 'block' });
});
$('.swiper-container').on('mouseleave', function() {
    $('.swiper-button-prev').css({ 'display': 'none' });
    $('.swiper-button-next').css({ 'display': 'none' });
});

// 快报轮播
// $(function() {

//     // 每隔1s滚动一下
//     var timing = setInterval('info()', 200);

//     $('#news_list_scroll .scroll-top-list').hover(
//         function() { clearInterval(timing); },
//         function() { timiing = setInterval("info()", 200) }
//     )

// })
var timing = setInterval('info()', 200);
$('#news_list_scroll .scroll-top-list').on('mouseenter', function() {
    clearInterval(timing);
})
$('#news_list_scroll .scroll-top-list').on('mouseleave', function() {
    timing = setInterval('info()', 200);

})

function info() {
    // 复制第一个li
    var li = $('#news_list_scroll .scroll-top-list li:eq(0)').clone();
    // 使用animate对li的外边距进行调整从而达到向上滚动的效果
    $('#news_list_scroll .scroll-top-list li:eq(0)').stop().animate({ marginTop: "-31px" }, 200, function() {
        // 对已经消失的li进行删除
        $('#news_list_scroll .scroll-top-list li:eq(0)').remove();
        // 把复制后的li插到最后
        $('#news_list_scroll .scroll-top-list').append(li);
    })
}