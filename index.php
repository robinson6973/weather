<!-- Look at all of this dank HTML -->

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
	<table>
		<!--primary button-->
		<button class= "action">Start</button>
		<!--Secondary Button-->
		<button> Enter </button>	
		<!--create something-->
		<button class="create">Create</button>
	</table>
	<!-- This is the form that is used to submit the postcode into the JS-->
	<form id="postCodeForm">
		<!-- Cheeky bit of text for the input -->
		Post Code:
		<!-- This bit is an input box for the post code -->
		<input type="text" name="postCode" id="postCode">
		<!-- This bits a submit box -->
		<input type="submit" name="submit"/>
	</form>
	<form>
		
	</form>
	<script src="GET.js"></script>
	<p>Powered by Dark Sky</p>
</body>

</html>


