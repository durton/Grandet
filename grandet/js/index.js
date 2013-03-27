var headHeight = 42;
var bodyTopMargin = 20;

$(document).ready(function(){
	pageInit();
	bindActive();
});

$(window).resize(function(e) {
    pageInit();
});
/**
 * 页面初始化
 */
var pageInit = function() {
	//得到页面宽、高
	var pageHeight = $(window).height(); 
	//设置主区域高度
	$(".sd_body").height(pageHeight - headHeight - bodyTopMargin);
	$(".sd_menus").height(pageHeight - headHeight - bodyTopMargin);
	$(".menus").height($(".sd_menus").height() - $(".m_head").height());
}
/**
 * 绑定事件
 */
var bindActive = function() {
	$(".topMenu").bind("click", function() {
		var topMenuText = $(this).html()
		if(topMenuText.substr(0, 1) == "+") {
			$(this).html("-" + topMenuText.substring(1,topMenuText.length));
			$(this).siblings().children(".subMenu").css("display", "block");
		} else {
			$(this).html("+" + topMenuText.substring(1,topMenuText.length));
			$(this).siblings().children(".subMenu").css("display", "none");
		}
	});
	
	$(".subMenu").bind("click", function() {
		$(".subMenu").removeClass("subMenuActive");
		$(this).addClass("subMenuActive");
	});
}