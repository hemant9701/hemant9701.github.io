let i; 
let t;
let y;

$(document).ready(() => {
	$('#search-by-title-button').click(function(){
		i = $("#i").val();
		t = $("#t").val();
		y = $("#y").val();
		if(t=='' & y=='' & i==''){
			alert("Please enter the value.");
		}else{
			fetchData();
		}
	});
	
});

let fetchData = () => {
	
	// API call to get user details
	
	$.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=e84540e8&i=' + i + '&y=' + y + '&t=' + t,

        success: (response) => {
			
			$('#search-by-title-request').css('display', 'block');

            console.log(response);
			
			let dataShow;
			
			dataShow = ('<h2>' + response.Title + ' <small>(' + response.Year + ')</small></h2>')
			dataShow += ('<h4>Director : ' + response.Director + '</h4>')
			dataShow += ('<h6>Actors : ' + response.Actors + '</h6>')
			$('#dataShow').html(dataShow);
			
			if(response.Poster == null || response.Poster=='N/A'){
				$('#poster').html('<img src="images/blank_poster.jpg"  id="poster" class="card-img-top"/>');
			}else{
				$('#poster').html('<img src="' + response.Poster + '"  id="poster" class="card-img-top"/>');
			}

        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
	});
}