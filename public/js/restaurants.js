$( document ).ready(function() {
    let $selectedRestaurant;
    $('#restaurant-choices').on('change', function(e){
		    $selectedRestaurant = $('#restaurant-choices').val();  
  	});

	 $('#add-restaurant').on('click', function(e){
    		const $spanToAdd = $('<span class="title"></span>');
    		$spanToAdd.text($selectedRestaurant);
    		$('#restaurant-itinerary').append($spanToAdd);
        const $remove = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        $('#restaurant-itinerary').append($remove);
    });
	
});

