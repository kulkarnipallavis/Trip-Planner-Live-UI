$( document ).ready(function() {
    console.log( "ready!" );
    let $selectedActivity;
    $('#activity-choices').on('change', function(e){
  		console.log("select on change ");
		  $selectedActivity = $('#activity-choices').val();
      	console.log("$selectedActivity",$('#activity-choices').val());
      	console.log($selectedActivity);
      
  	});

	$('#add-activity').on('click', function(e){
		console.log("in add");
  		const $spanToAdd = $('<span class="title"></span>');
  		$spanToAdd.text($selectedActivity);
  		$('#activity-itinerary').append($spanToAdd);
      const $remove = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
      $('#activity-itinerary').append($remove);
  	});
	
  	
});

