$(document).ready(function(){
	
	$('#modal-1').click(function(){
        $('#modalIn-1').fadeIn();
    });
	$('#modalIn-1 .close').click(function(){
        $('#modalIn-1').fadeOut();
    });
	
	$('#modal-2').click(function(){
        $('#modalIn-2').fadeIn();
    });
	$('#modalIn-2 .close').click(function(){
        $('#modalIn-2').fadeOut();
    });
	
	$('#modal-3').click(function(){
        $('#modalIn-3').fadeIn();
		$("input[name|='sub']").val('@Subject');
    });
	$('#modalIn-3 .close').click(function(){
        $('#modalIn-3').fadeOut();
    });
	
	$('#modal-4').click(function(){
        $('#modalIn-4').fadeIn();
    });
	$('#modalIn-4 .close').click(function(){
        $('#modalIn-4').fadeOut();
    });
	
	$('#modal-5').click(function(){
        $('#modalIn-5').fadeIn();
    });
	$('#modalIn-5 .close').click(function(){
        $('#modalIn-5').fadeOut();
    });
	
	
	$("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	
});