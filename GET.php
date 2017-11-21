<?php
 // This file is here to allow me to request the API's data without having any issues with security
// This bit passes the location from JS into this bit of code
	$url = 'https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/'.$_GET["lat"].','.$_GET["lng"].'?units=ca&exclude=alerts,flags';
	$options = array(
		'http' => array(
	    	'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    		'method'  => 'GET'
	    )
	);
	$context = stream_context_create($options);
	$result = file_get_contents($url, false, $context);
	header("Content-type: application/json");
	echo($result);
?>