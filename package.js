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