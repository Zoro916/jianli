$(function(){
	
	//matter部分，鼠标悬停图标变大
	$('.matter').hover(
		function(){
			$(this).children().animate({'width':80,'height':80,'margin':0}).css("cursor","pointer")},
		function(){
			$(this).children().animate({'width':60,'height':60,'margin':10})
			});
	//zoro部分，鼠标悬停显示详细内容，头像变大
	$('#zoro').hover(
		function(){
			$(this).animate({'width':180,'height':180,'margin-top':135,'margin-left':390}).css("cursor","pointer")},
		function(){
			$(this).animate({'width':150,'height':150,'margin-top':150,'margin-left':405})
		});
	//skill部分，鼠标悬停图标变大
	$('.plan').hover(
		function(){
			$(this).children().animate({'width':100,'height':114,'margin':0}).css("cursor","pointer")},
		function(){
			$(this).children().animate({'width':87,'height':100,'margin':0})
			});	
	//callingcard部分，鼠标悬停图标变大
	$('.digest').hover(
		function(){
			$(this).children().animate({'width':80,'height':80,'margin':0}).css("cursor","pointer")},
		function(){
			$(this).children().animate({'width':60,'height':60,'margin':10})
			});
	//点击博客弹出"目前博客正在努力建设中，敬请期待"
	$('#nav ul li a').eq(1).click(function(){
		alert('目前博客正在努力建设中，敬请期待...')	
	})
	//学历点击弹出div
	/*$('#aboutme_matter').children().eq(0).click(function(){
		$('.introduction').slideToggle('slow')
		var display=$('.introduction').css('display')
		if(display!='none'){
			$(document).click(function(){
				$('.introduction').slideUp('slow');})
			return false;}
	})
		*/
	//尝试第一次将点击.matter弹出div封装
/*	$('.matter').click(function(){
		var i=$(this).index();
		var a=$('#aboutme_matter').children()
		var str=a.eq(i).children().attr('src')

		str=str.substring(7, str.indexOf('.'));
		str='#'+str;

		$('.introduction').each(function(){
			$(this).css('display','none')
			})

		$(str).slideToggle('slow')

		var display=$(str).css('display')

		if(display!='none'){
			$(document).click(function(){
				$(str).slideUp('slow');
				})

		return false;
		}
	})
*/
//尝试第一次将点击其他模块触发切换slideUp、slideDown封装

/*封装成功，分离脚本到package.js，使用时调用clickChange函数
function clickChange(a,b){
	var str;
	var display;
	$(a).click(function(){
		var i=$(this).index();
		var a=$(this).parent().children();
		str=a.eq(i).children().attr('src');
		str=str.substring(7, str.indexOf('.'));
		str='#'+str;
		display=$(str).css('display');
		$(b).each(function(){
			$(this).slideUp('slow');
			})
		if(display!='none'){
			$(str).slideUp('slow');
		}else{
			$(str).slideDown('slow');
		}
		return false;
	});
	display=b+':visible'
	if(display){
			$(document).click(function(){
				$(str).slideUp('slow');
			});
		};
};
*/
clickChange('.matter','.introduction');//调用clickChange函数，使鼠标点击.matter的图片实现div隐藏与显示的切换
clickChange('.plan','.introduction');//调用clickChange函数，使鼠标点击.plan的图片实现div隐藏与显示的切换


//$()function的结束括号
})
