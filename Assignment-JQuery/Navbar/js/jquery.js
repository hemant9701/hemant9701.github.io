$(document).ready(function(){
	
	$(".collapse").toggleClass("show");
		$("#toggle").click(function() {
			$(this).toggleClass("on");
			$(".collapse").slideToggle();
	});
	
	
	
	
    $('.dropdown').click(function(){
        $('.sub-nav').slideToggle(500);
    });
	
	 $('ul li a').click(function(){
		$('li a').removeClass("active");
		$(this).addClass("active");
	});
	
	$("a[href='']").parent().addClass('disable');
	
	$("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	
});