// JavaScript Document
$(document).ready(function(){
	pageInit();
});

$(window).resize(function(e) {alert(1);
    pageInit();
});

var pageInit = function() {
	//得到页面宽、高
	var pageHeight = $("iframe", window.parent.document).height();
	$(".tbody").height(pageHeight - $(".total").height() - 80);
	//添加滚动条
	$(".tbody").niceScroll({
		cursorcolor:"#718cc4",
	});
	
	//列表偶数行变色
	$(".row:odd").css("background-color", "#e6f1f5");
	//绑定列表行点击事件
	bindRowClick();
}

var bindRowClick = function() {
	$(".row").bind("click", function() {
		if($(this).siblings().css("display") == "none") {
			$(".subRow").css("display", "none");
			$(this).siblings().css("display", "block");
		} else {
			$(this).siblings().css("display", "none");
		}
	});
}