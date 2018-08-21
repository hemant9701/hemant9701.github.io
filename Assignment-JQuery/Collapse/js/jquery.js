$(document).ready(function(){
    $('#list-1 input').click(function(){
        $('#list-1 .listItem').slideToggle(1000);
		$('#list-2 .listItem').slideUp(1000);
		$('#list-3 .listItem').slideUp(1000);
		$('#list-4 .listItem').slideUp(1000);
    });
	$('#list-2 input').click(function(){
        $('#list-2 .listItem').slideToggle(1000);
		$('#list-1 .listItem').slideUp(1000);
		$('#list-3 .listItem').slideUp(1000);
		$('#list-4 .listItem').slideUp(1000);
    });
	$('#list-3 input').click(function(){
        $('#list-3 .listItem').slideToggle(1000);
		$('#list-1 .listItem').slideUp(1000);
		$('#list-2 .listItem').slideUp(1000);
		$('#list-4 .listItem').slideUp(1000);
    });
	$('#list-4 input').click(function(){
        $('#list-4 .listItem').slideToggle(1000);
		$('#list-1 .listItem').slideUp(1000);
		$('#list-3 .listItem').slideUp(1000);
		$('#list-2 .listItem').slideUp(1000);
    });
});