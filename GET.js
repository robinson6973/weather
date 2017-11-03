//AIzaSyCGsuDfXsl3gcvQwnl86GpI3nArhiCF4yU
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCGsuDfXsl3gcvQwnl86GpI3nArhiCF4yU
//takes the inputted postvode
var form = document.getElementById("postCodeForm");
form.onsubmit = function(event){
	event.preventDefault();
	console.log(event);
	var postCodeInput = document.getElementById("postCode");
	console.log(postCodeInput.value);
}

function locationRequest(data){
	//Makes the request to get the data from Geocoder
	var xhrLoc = new XMLHttpRequest();
	//Makes the API request
	xhrLoc.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + event + "key=AIzaSyCGsuDfXsl3gcvQwnl86GpI3nArhiCF4yU")
	xhrLoc.onload = function(){
		var locationData = JSON.parse(xhrLoc.response);
		console.log(locationData);
	}
	xhrLoc.send
}

function weatherRequest(){
	//Makes the request to get the data from Dark Skies
	var xhrWeather = new XMLHttpRequest();
	//Makes the API request
	xhrWeather.open("GET", "https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/37.8267,-122.4233")
	xhrWeather.onload = function(){
		var data = JSON.parse(xhrWeather.response);
		console.log(locadata);
	}
	xhrWeather.send
}