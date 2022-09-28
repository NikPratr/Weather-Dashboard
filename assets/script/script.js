var APIKey = "cdce9d5ab609a9a2be9e26b244ddfc46";
var cityName = document.querySelector("#city-name");
var cityTemp = document.querySelector("#temp");
var cityWind = document.querySelector("#wind");
var cityHumidity = document.querySelector("#humidity");
var cityUV = document.querySelector("#uv");
var userInput = document.querySelector("#searchbar");
var submitButton = document.querySelector("#submit-button");

// submitButton.addEventListener("click", defineCity);

// function defineCity() {
//     var city = userInput.value;
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//     fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         cityName.textContent = data.name;
//         console.log(data.main.temp);
//         cityTemp.textContent = "Temperature: " + data.main.temp + " K"
//         // cityTemp.textContent = data.main[0];
//     });
// }

var city = "Dayton";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    cityName.textContent = data.name;
    console.log(data.main.temp);
    cityTemp.textContent = "Temperature: " + data.main.temp + "°F";
    // cityTemp.textContent = data.main[0];
});

// fetch(queryURL)
//     .then(res => res.json())
//     .then(data => console.log(data))
