var randomNumber = 1;
var simpleBoolean= true; 
var variableName = document.getElementById('')
var apiRequest1 = ""
var apiRequest2 = ""


// Need to eventually add function to get API
// Will include the rest of the code in that function. 

function runAPI() {
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


variableName.addEventListener('click', runAPI);
