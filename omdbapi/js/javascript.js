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
			let dataShow;
            console.log(response);
			if(response.Title != null || response.imdbID != null){
				
				if(response.Poster != null && response.Poster != "N/A"){
					dataShow = ('<div id="poster">');
					dataShow += ('<img src="' + response.Poster + '" class="card-img-top"/>');
					dataShow += ('</div>');
				}else{
					dataShow = ('<div id="poster">');
					dataShow += ('<img src="images/blank_poster.jpg" class=""  width="250px"/>');
					dataShow += ('</div>');
				}
				
				dataShow += ('<div class="card-body" id="dataShow">');
				dataShow += ('<p>Type : ' + response.Type + '</p>');
				dataShow += ('<h2>' + response.Title + ' <small>(' + response.Year + ')</small></h2>');
				dataShow += ('<h4>Director : ' + response.Director + '</h4>');
				dataShow += ('<h6>Actors : ' + response.Actors + '</h6>');
				dataShow += ('<h6><em>Genre : ' + response.Genre + '</em></h6>');
				dataShow += ('<p><strong>Rating : ' + response.imdbRating + '</strong></p>');
				dataShow += ('<em>Language : ' + response.Language + '</em>');
				dataShow += ('<p>Short story : ' + response.Plot + '</p>');
				dataShow += ('</div>');
				
			}else{
				dataShow = ('<div id="poster">');
				dataShow += ('<img src="images/blank_poster.jpg" class="" width="250px"/>');
				dataShow += ('</div>');
			}
			$('#card').html(dataShow);
			
        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
	});
}