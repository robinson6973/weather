//takes the inputted postcode from the php form and outputs it in the console
var form = document.getElementById("postCodeForm");
form.onsubmit = function(event){
	event.preventDefault();
	console.log(event);
	var postCodeInput = document.getElementById("postCode");
	locationRequest(postCodeInput.value);
//	fuckUp(postCodeInput.value)
	console.log(postCodeInput.value)
}

// function fuckUp(postCodeInput.value){
// 	try {
// 		locationRequest(postCode)
// 	}
// 	catch(e){
// 		alert('stop cocking up'+e.message)
// 	}
// }
//This function takes the postcode, combines it with the API and then gets a JSON file back
function locationRequest(postCode){
	//Makes the request to get the data from Geocoder
	var xhrLoc = new XMLHttpRequest();
	//Makes the API request
	xhrLoc.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + postCode + "&key=AIzaSyCGsuDfXsl3gcvQwnl86GpI3nArhiCF4yU")
	//when this bit loads:
	console.log("server contact positive")
	xhrLoc.onload = function(){
		//get that bare JSON formatted
		var locationData = JSON.parse(xhrLoc.response);
		getLatLng(locationData)
		console.log(locationData)
	}
	xhrLoc.send()
}

//This function takes the JSON from the previous function. It then gets out a lattitude or longitude.
//	lat
//	lng
function getLatLng(results){
	//Output the results
	console.log(results);
	//Scroll down the array in the JSON. I ignore everything except the two lat long variables
	var location = results["results"][0]["geometry"]["location"],
		//Finds the lattitude value
		lat = location["lat"],
		//Finds the longitude value
		lng = location["lng"]
	//weatherRequest(lat, lng)
	//Output the lat, long into the console for debugging 2
	console.log(lat)
	console.log(lng)
	console.log("lat, lng. Above")
}


//This function fetches the data from the server via a PHP function
// function weatherRequest(lat, lng){
// 	//Makes the request to get the data from GET.php file
// 	//The GET file is there to 
// 	var xhrWeather = new XMLHttpRequest();
// 	//Gets the data from the GET.php document
// 	xhrWeather.open("GET", "GET.php/?lat=" + lat + "&lng=" + lng);
// 	//WHen the weather data loads parse it from JSON into arrays
// 	xhrWeather.onload = function(){
// 		//	
// 		var weatherData = JSON.parse(xhrWeather.response);
// 		getWeatherCurrent(weatherData);
// 		console.log("weatherData being aquired");
// 		console.log(weatherData)
// 	}
// 	xhrWeather.send()
// }

//This bit finds the time at current...
//The variables that I will be working with later down in the program will be
//	timeMinutely 
//	timeHourly
//	timeDaily
// var time = function () {
// 	return Date.now()/1000
// 	var timeMinutely = time,
// 		timeHourly = time+3600,
// 		timeDaily = time+86400	
// }

//This function parses the JSON and	
// function getWeatherCurrent(weatherData){
// 	console.log(weatherData)
// 	var currently = weatherData["currently"],
// 		time = currently["time"],
// 		summary = currently["summary"],
// 		precipIntensity = currently["precipIntensity"]
// 		apparentTemperature = currently["apparentTemperature"],
// 		windSpeed = currently["windSpeed"]
// 	console.log(time)
// 	console.log(summary)
// 	console.log(precipIntensity)
// 	console.log(apparentTemperature)
// 	console.log(windSpeed)
// }

//Same as above but for every minute in the Data set.
// function getWeatherMinutely(weatherData){
// 	console.log(weatherData)
// 	var minutelyCurrently = weatherData["currently"],
// 		minutelyTIme = currently["time"],
// 		minutelySummary = currently["summary"],
// 		minutelyPrecipIntensity = currently["precipIntensity"]
// 		minutelyApparentTemperature = currently["apparentTemperature"],
// 		minutelyWindSpeed = currently["windSpeed"]
// 	console.log(tme)
// 	console.log(summary)
// 	console.log(precipIntensity)
// 	console.log(apparentTemperature)
// 	console.log(windSpeed)
// }

//Same as above but for every hour in the Data set.
// function getWeatherHourly(weatherData){
// 	console.log(weatherData)
// 	var hourlyCurrently = weatherData["currently"],
// 		hourlyTime = currently["time"],
// 		hourlySummary = currently["summary"],
// 		hourlyPrecipIntensity = currently["precipIntensity"]
// 		hourlyApparentTemperature = currently["apparentTemperature"],
// 		hourlyWindSpeed = currently["windSpeed"]
// 	console.log(time)
// 	console.log(summary)
// 	console.log(precipIntensity)
// 	console.log(apparentTemperature)
// 	console.log(windSpeed)
// }

// //Same as above but for every day in the data set
// function getWeatherDaily(weatherData){
// 	console.log(weatherData)
// 	var dailyCurrently = weatherData["currently"],
// 		dailyTime = currently["time"],
// 		dailySummary = currently["summary"],
// 		dailyPrecipIntensity = currently["precipIntensity"]
// 		dailyApparentTemperature = currently["apparentTemperature"],
// 		dailyWindSpeed = currently["windSpeed"]
// 	console.log(time)
// 	console.log(summary)
// 	console.log(precipIntensity)
// 	console.log(apparentTemperature)
// 	console.log(windSpeed)
// }