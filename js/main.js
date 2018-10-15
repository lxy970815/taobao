/*
* @Author: Administrator
* @Date:   2018-07-30 17:22:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-30 19:31:58
*/
$(function(){
	var now = 0;

	// 设置点击下标播放
	$('.section1-right-top ol li').click(function(){
		var index = $(this).index();
		now = index;
		// $(this).addClass('current').siblings('li').removeClass('current');
		slideImg();
	});
	// 设置自动播放
	var timer = setInterval(autoplay, 1000);
	// 自动播放方法
	function autoplay() {
		if(now > 4) {
			now = 0;
		}
		slideImg();
		now++;
	}

	// 设置图片滚动
	function slideImg() {
		$('.section1-right-top ul').stop().animate({left:now*-520}, 500);
		// 设置下标和图片一致
		$('.section1-right-top ol li').eq(now).addClass('current').siblings('li').removeClass('current');
	}
	// 设置点击左播放
	$('.section1-right-top .arrow-left').click(function(){
		if(now < 1) {
			now = 4;
		}
		else {
			now--;
		}
		slideImg();
	});
	// 设置点击右播放
	$('.section1-right-top .arrow-right').click(function(){
		if(now > 3) {
			now = 0;
		}
		else {
			now++;
		}
		slideImg();
	});
	// 鼠标悬浮，取消滚动
	$('.section1-right-top .div1').hover(function() {
		$('.section1-right-top span').fadeIn();
		clearInterval(timer);
	}, function() {
		$('.section1-right-top span').fadeOut();
		timer = setInterval(autoplay, 1000);
	});


	var i = 0;
	// 上下滚动的消息
	function updown() {
		if(i > 1) {
			i = 0;
		}
		else {
			i++;
		}
		$('.section2-right > div').stop().animate({top:i*-73}, 500);
	}
	var timer2 = setInterval(updown, 3000);


});