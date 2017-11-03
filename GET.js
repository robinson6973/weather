//takes the inputted postcode from the php form and wacks it in the console
var form = document.getElementById("postCodeForm");
form.onsubmit = function(event){
	event.preventDefault();
	console.log(event);
	var postCodeInput = document.getElementById("postCode");
	locationRequest(postCodeInput.value);
}

//This function takes the postcode, combines it with the API and then gets a JSON file back
function locationRequest(postCode){
	//Makes the request to get the data from Geocoder
	var xhrLoc = new XMLHttpRequest();
	//Makes the API request
	xhrLoc.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + postCode + "&key=AIzaSyCGsuDfXsl3gcvQwnl86GpI3nArhiCF4yU")
	//when this bit loads:
	xhrLoc.onload = function(){
		//get that bare JSON formatted
		var locationData = JSON.parse(xhrLoc.response);
		getLatLng(locationData)
	}
	xhrLoc.send()
}

//This function takes the JSON from the previous function. It then gets out a lattitude or longitude.
function getLatLng(results){
	//Output the results
	console.log(results);
	//Scroll down the array in the JSON. I ignore everything except the two lat long variables
	var location = results["results"][0]["geometry"]["location"]
	//Finds the lattitude value
	var lat = location["lat"]
	//Finds the longitude value
	var lng = location["lng"]
	weatherRequest(lat, lng)
	//Output the lat, long into the console for debugging 2
	console.log(lat)
	console.log(lng)
}

function weatherRequest(lat, lng){
	//Makes the request to get the data from Dark Skies
	var xhrWeather = new XMLHttpRequest();
	//Makes the API request
	xhrWeather.open("GET", "https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/" + lat + lng)
	xhrWeather.onload = function(){
		var weatherData = JSON.parse(xhrWeather.response);
		console.log(weatherData);
	}
	xhrWeather.send
}

//This function takes the JSON from the previous function. It then gets out a lattitude or longitude.
function getLatLng(results){
	console.log(results);
	var location = results["results"][0]["geometry"]["location"]
	var lat = location["lat"]
	var lng = location["lng"]
	weatherRequest(lat, lng)
	console.log(lat)
	console.log(lng)
}
 
