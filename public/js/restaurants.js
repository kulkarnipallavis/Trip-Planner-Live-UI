$( document ).ready(function() {
    console.log( "ready!" );
    let $selectedRestaurant;
    $('#restaurant-choices').on('change', function(e){
  		console.log("select on change ");
		  $selectedRestaurant = $('#restaurant-choices').val();
      	console.log("$selectedRestaurant",$('#restaurant-choices').val());
      	console.log($selectedRestaurant);
      
  	});

	$('#add-restaurant').on('click', function(e){
		console.log("in add");
  		const $spanToAdd = $('<span class="title"></span>');
  		$spanToAdd.text($selectedRestaurant);
  		$('#restaurant-itinerary').append($spanToAdd);
      const $remove = $('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
      $('#restaurant-itinerary').append($remove);
  	});
	
});

