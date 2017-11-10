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
	var location = results["results"][0]["geometry"]["location"],
		//Finds the lattitude value
		lat = location["lat"],
		//Finds the longitude value
		lng = location["lng"]
	weatherRequest(lat, lng)
	//Output the lat, long into the console for debugging 2
	console.log(lat)
	console.log(lng)
}



function weatherRequest(lat, lng){
	//Makes the request to get the data from GET.php file
	//The GET file is there to 
	var xhrWeather = new XMLHttpRequest();
	//Gets the data from the GET.php document
	xhrWeather.open("GET", "GET.php/?lat=" + lat + "&lng=" + lng);
	//WHen the weather data loads parse it from JSON into arrays
	xhrWeather.onload = function(){
		//	
		var weatherData = JSON.parse(xhrWeather.response);
		getWeatherCurrent(weatherData);
		console.log("weatherData being aquired");
		console.log(weatherData)
	}
	xhrWeather.send()

}

//This bit finds the time at current...
var time = function () {
	return Date.now()/1000
}

//CURRENT TIME!!!!!!!!!!!!!
//This function takes the JSON from the previous function. It then gets out a lattitude or longitude.
//	function getcurrent weather
//	print current weather
//		
function getWeatherCurrent(currently){
	//
	console.log(currently);
	var weather = currently["currently"],
		time = currently["time"],
		summary = currently["summary"],
		precipIntensity = currently["precipIntensity"]
		apparentTemperature = currently["apparentTemperature"],
		windSpeed = currently["windSpeed"]
	console.log(time)
	console.log(summary)
	console.log(precipIntensity)
	console.log(apparentTemperature)
	console.log(windSpeed)
}

//This bit gets minutely weather
function getWeather(minutely){
	console.log(currently);
	var weather = currently["currently"][0],
		time = currently["time"],
		summary = currently["summary"],
		precipIntensity = currently["precipIntensity"]
		apparentTemperature = currently["apparentTemperature"],
		windSpeed = currently["windSpeed"]
	console.log(time)
	console.log(summary)
	console.log(precipIntensity)
	console.log(apparentTemperature)
	console.log(windSpeed)
}

//This bit gets hourly weather
function getWeather(hourly){
	console.log(currently);
	var weather = currently["currently"][0],
		time = currently["time"],
		summary = currently["summary"],
		precipIntensity = currently["precipIntensity"]
		apparentTemperature = currently["apparentTemperature"],
		windSpeed = currently["windSpeed"]
	console.log(time)
	console.log(summary)
	console.log(precipIntensity)
	console.log(apparentTemperature)
	console.log(windSpeed)
}