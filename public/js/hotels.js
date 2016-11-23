
$( document ).ready(function() {
    let $selectedHotel;
    let dayItinerary = [];
    let hotelsForDay = [];
    let counter = 0;
    let day;
    console.log(hotels);
    $('#hotel-choices').on('change', function(e){
		$selectedHotelIndex = $('#hotel-choices').val()-1;
		// $selectedHotel = $('#hotel-choices').text();
		console.log("$selectedHotelIndex ",$selectedHotelIndex );
		const coords = hotels[$selectedHotelIndex].place.location;
		console.log("$('#hotel-choices').val()", coords);
		drawMarker('hotel', coords);
  	});

	$('#add-hotel').on('click', function(e){
  		const $spanToAdd = $('<span class="title"></span>');
  		$spanToAdd.text($selectedHotel);
  		hotelsForDay.push($selectedHotel);
  		$('#hotel-itinerary').append($spanToAdd);
  		const $remove = $('<button id="remove-hotel" class="btn btn-xs btn-danger remove btn-circle">x</button>');
  		$('#hotel-itinerary').append($remove);
  	});

	$('#hotel-itinerary').on('click', '.remove', function(e){
		const $remove = $(this);
        const $parentDiv = $remove.parent();
        console.log("$remove.index()"+$remove.index());
        const $spanToRemove = $remove.siblings('span');
        const elementIndex = $parentDiv.index();
        $spanToRemove.remove();
        $remove.remove(); 
	});
  	

  $('#day-add').on('click', function(e){
      // console.log("add day clicked");
      const $parentDiv = $(this).parent();
      const $newButton = $('<button id="#newDay" class="btn btn-circle day-btn"></button>');
     	day = ++counter;
      $newButton.text(day);
      $parentDiv.append($newButton);
      console.log("$parentDiv.index()",$parentDiv.index());
      // console.log("$parentDiv.children().last()",($parentDiv.children().last()).val());
       console.log($( "button" ).index( this ));
       // console.log($( "#newDay" ).index( this ));
       // const dayObj = {
       // 	hotelsForDay : 
       // 	restaurants:
       // 	activities
       // }
       console.log({day : {hotel : hotelsForDay}});
       console.log("day",day);
       console.log("hotel", hotelsForDay);
       dayItinerary.push({day : {hotel : hotelsForDay}});

  });
  	

});

