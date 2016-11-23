$( document ).ready(function() {
    let $selectedActivity;
    $('#activity-choices').on('change', function(e){
		      $selectedActivity = $('#activity-choices').val();
  	});

	$('#add-activity').on('click', function(e){
  		const $spanToAdd = $('<span class="title"></span>');
  		$spanToAdd.text($selectedActivity);
  		$('#activity-itinerary').append($spanToAdd);
      const $remove = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
      $('#activity-itinerary').append($remove);
  	});
	
  	
});

