<?php
	$response = file_get_contents('https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/" + lat + "," + lng');
	$response = json_decode($response);
?>
<!-- This is some code from StackOverflow -->
<?php
$url = 'https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/" + lat + "," + lng';
$data = array('key1' => 'value1', 'key2' => 'value2');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }

var_dump($result);
?>

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
	<form>
		
	</form>
	<script src="GET.js"></script>
</body>

</html>