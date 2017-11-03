//takes the inputted postvode
var form = document.getElementById("postCodeForm");
form.onsubmit = function(event){
	event.preventDefault();
	console.log(event);
	var postCodeInput = document.getElementById("postCode");
	locationRequest(postCodeInput.value);
}

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

function getLatLng(results){
	console.log(results);
	var location = results["results"][0]["geometry"]["location"]
	var lat = location["lat"]
	var lng = location["lng"]
	weatherRequest(lat, lng)
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

