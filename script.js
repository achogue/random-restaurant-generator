var city;
var APIkey = "AIzaSyB3Qtqf3lJWGCE5j3UEGb8-0Xj3FKfe0BA";
var map;
var service;
var infowindow;

// Map //
function initialize(position) {
  var pyrmont = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );

  map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 15,
  });

  var request = {
    location: pyrmont,
    radius: "1000",
    query: "restaurant",
    fields: "price_level",
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
<<<<<<< HEAD
    console.log(place);
=======
     console.log(place.name);
>>>>>>> f40d78c8fb720fe8d6d0b030c03442bcec5ebc01
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Local Storage //

  var radios = document.getElementsByName("priceLevel");
  var val = localStorage.getItem("priceLevel");

  for(var i=0; i<radios.length; i++){
    if(radios[i].value == val){
      radios[i].checked = true;
    }
  } 
}
