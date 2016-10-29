$(function(){
	//实现循环滚动
	function Roll (){
		var newFrist = $('.popup').children().first().clone(true);
		$('.popup').append(newFrist);
		$('.popup').children().first().remove();
		};
		var clock = setInterval(Roll,1500);
	//点击关闭滚动窗口
	$('button').click(function(){
		$(this).parents('.news').remove();
		
	});
	$('.link').hover(
		function(){
			clearInterval(clock);
			},
		function(){
			clock = setInterval(Roll,1500);
			}
	)
	var xPage;
	var yPage;
	$(document).mousemove(function(e){
		xPage = e.pageX;
		yPage = e.pageY;});
	$('.link').hover(
		function(){
			$(this).parents('.news').find('.main').css({top:yPage-58,left:xPage-80}).show();
		}
		,function(){
			$(this).parents('.news').find('.main').hide();
		})

});
	/*鼠标悬浮时滚动暂停
	$('.link').mouseover(function(){
		clearInterval(clock);
	});
	//鼠标离开重启定时器
	$('.link').mouseout(function(){
		clock = setInterval(Roll,1500);
	});
	
	
	
	/*		$(this).parents('#news').append("<div class='main'>点击浏览详细内容</div>");
/*		$(this).parents('#news').children('.main').css({'height':'14px',
												'width':'100px',
												'background-color':'white',
												'display':'none',
												'position':'absolute',
												'top':-yPage,
												'left':-xPage,
												'z-index':'2'});
		$(this).parents('#news').show();
	},*/
	
