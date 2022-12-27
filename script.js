var city;
var APIkey = "AIzaSyB3Qtqf3lJWGCE5j3UEGb8-0Xj3FKfe0BA";
var map;
var service;
var infowindow;

// Map //
 function initialize(position) {
  var pyrmont = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Random Restaurant //
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {

    let place = results[getRandomInt(results.length)];
    
    new google.maps.Marker({
      map,
      title: place.name,
      position: place.geometry.location,
    });
     console.log(place);
  }

  function getRandomInt(max){
    return Math.floor(Math.random() * max);
  }
}