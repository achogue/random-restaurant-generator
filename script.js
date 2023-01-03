var city;
var APIkey = "AIzaSyB3Qtqf3lJWGCE5j3UEGb8-0Xj3FKfe0BA";
var map;
var service;
var infowindow;
var priceVal = 0;

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

// Random restaurant filtered by price //
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let place;
    let priceFilter;

    if (priceVal != 0) {
      
      priceFilter = results.filter((pF) => pF.price_level == priceVal);

      if (priceFilter.length != 0) {
        place = priceFilter[getRandomInt(priceFilter.length)];
        new google.maps.Marker({
          map,
          title: place.name,
          position: place.geometry.location,
        });
      }
      // Display "No Results" with a Modal
      else {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
  
        modal.style.display = "block";
  
        span.onclick = function () {
          modal.style.display = "none";
        };
  
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }
  } 
  else {
    place = results[getRandomInt(results.length)];
    new google.maps.Marker({
      map,
      title: place.name,
      position: place.geometry.location,
    });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Local Storage at start of page //

$(document).ready(function () {
  var radios = document.getElementsByName("moneyVal");
  var val = localStorage.getItem("moneyVal");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].id == val) {
      radios[i].checked = true;
      console.log(val);

      switch (radios[i].id) {
        case "priceLevelAny":
          priceVal = 0;
          break;
        case "priceLevel1":
          priceVal = 1;
          break;
        case "priceLevel2":
          priceVal = 2;
          break;
        case "priceLevel3":
          priceVal = 3;
          break;
        case "priceLevel4":
          priceVal = 4;
          break;
      }
    }
  }
});

// Local storage based on value of radio ID
function localStorVal(radioId) {
  localStorage.setItem("moneyVal", radioId);

  switch (radioId) {
    case "priceLevelAny":
      priceVal = 0;
      break;
    case "priceLevel1":
      priceVal = 1;
      break;
    case "priceLevel2":
      priceVal = 2;
      break;
    case "priceLevel3":
      priceVal = 3;
      break;
    case "priceLevel4":
      priceVal = 4;
      break;
  }
}
