var randomNumber = 1;
var simpleBoolean= true; 
var variableName = document.getElementById('')
var apiRequest1 = ""
var apiRequest2 = ""

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
window.initMap = initMap;

// Need to eventually add function to get API
// Will include the rest of the code in that function. 
function runAPI() {

function runAPI1() {
    console.log(randomNumber);
    fetch (apiRequest1)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var location = document.createElement('h3')
                location.textContent = data[i];// continued later
                // container then gets appended with (location)
            }
        })
}

function runAPI2() {
    fetch (apiRequest2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var location = document.createElement('h3')
            location.textContent = data[i];// continued later
            // container then gets appended with (location)
        }
    })
}


}
//
// Wondering if the second API will need to hava seperate function (but still wrapped in the eventListner)
//

//variableName.addEventListener('click', runAPI);
