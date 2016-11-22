$( document ).ready(function() {
    console.log( "ready!" );
    let $selectedHotel;
    $('#hotel-choices').on('change', function(e){
  		console.log("select on change ");
		$selectedHotel = $('#hotel-choices').val();
      	console.log("$selectedHotel",$('#hotel-choices').val());
      	console.log($selectedHotel);
      
  	});

	$('#add-hotel').on('click', function(e){
		console.log("in add");
  		const $spanToAdd = $('<span class="title"></span>');
  		$spanToAdd.text($selectedHotel);
  		$('#hotel-itinerary').append($spanToAdd);
  		const $remove = $('<button id="remove-hotel" class="btn btn-xs btn-danger remove btn-circle">x</button>');
  		$('#hotel-itinerary').append($remove);
  	});
	
	$('button').on('click', function(e){
		console.log("remove hotel clicked");
		const $remove = $(this);
		console.log("$remove",$remove, $(this).id);
        // const value = $remove.val();
        
        const $parentDiv = $remove.parent();
        console.log("$parentDiv"+$parentDiv);
        const $spanToRemove = $remove.siblings('span');
        const elementIndex = $parentDiv.index();
        console.log("$spanToRemove",$spanToRemove);
        $spanToRemove.remove();
        
       
	});
  	
});

