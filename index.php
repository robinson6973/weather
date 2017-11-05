<?php

?>

<!DOCTYPE html>
<html>
<head>
	<title>Weather application</title>
	<meta charset="utf-8"
	name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="main.css"/>
 	<link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"/>
 	<link rel="icon" href="">
</head>

<body>
	<h1>Weather App</h1>

	<!--primary button-->
	<button class= "action">Start</button>
	<!--Secondary Button-->
	<button> Enter </button>
	<!--create something-->
	<button class="create">Create</button>
	<!-- share something -->
	<button class="share">Share</button>
	<!-- This is the form that is used to submit the postcode into the JS-->
	<form action="C:/Users/robin/Desktop/website/GET.php " id="postCodeForm">
		<!-- Cheeky bit of text for the input -->
		Post Code:
		<input type="text" name="postCode" id="postCode">
		<input type="submit" name="submit"/>
	</form>
	<script src="GET.js"></script>
</body>

</html>