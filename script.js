
document.getElementById("mainBtn").addEventListener("click", getRestaurant);

function getRestaurant() {
    document.getElementById("demo").innerHTML = Date();
}



// var randomNumber = 1;
// var simpleBoolean= true; 
// var variableName = document.getElementById('')
// var apiRequest1 = ""
// var apiRequest2 = ""

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 10,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }
// window.initMap = initMap;

// // Need to eventually add function to get API
// // Will include the rest of the code in that function. 
// function runAPI() {

// function runAPI1() {
//     console.log(randomNumber);
//     fetch (apiRequest1)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data){
//             console.log(data);
//             for (var i = 0; i < data.length; i++) {
//                 var location = document.createElement('h3')
//                 location.textContent = data[i];// continued later
//                 // container then gets appended with (location)
//             }
//         })
// }

// function runAPI2() {
//     fetch (apiRequest2)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data);
//         for (var i = 0; i < data.length; i++) {
//             var location = document.createElement('h3')
//             location.textContent = data[i];// continued later
//             // container then gets appended with (location)
//         }
//     })
// }


// }
// //
// // Wondering if the second API will need to hava seperate function (but still wrapped in the eventListner)
// //

// //variableName.addEventListener('click', runAPI);



// // ANNA'S CODE STARTS HERE:   API KEY? AIzaSyB3Qtqf3lJWGCE5j3UEGb8-0Xj3FKfe0BA



// // Nearby places request
// // var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-34.397, 150.644);

//   // map = new google.maps.Map(document.getElementById('map'), {
//   //     center: pyrmont,
//   //     zoom: 15
//   //   });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     type: ['restaurant']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }
// console.log(request);

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }


// places stuff

// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
  });
  const input = document.getElementById("pac-input");
  // Specify just the place data fields that you need.
  const autocomplete = new google.maps.places.Autocomplete(input, {
    fields: ["place_id", "geometry", "formatted_address", "name"],
  });

  autocomplete.bindTo("bounds", map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({ map: map });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  autocomplete.addListener("place_changed", () => {
    infowindow.close();

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    // @ts-ignore This should be in @typings/googlemaps.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location,
    });
    marker.setVisible(true);
    infowindowContent.children.namedItem("place-name").textContent = place.name;
    infowindowContent.children.namedItem("place-id").textContent =
      place.place_id;
    infowindowContent.children.namedItem("place-address").textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;

