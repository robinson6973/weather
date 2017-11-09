<!-- This file is here to allow me to request the API's data without having any issues with security-->
<?php
$_GET["lat"]
$_GET["lng"]
$url = 'https://api.darksky.net/forecast/f46a65f5e5124d53891965f3209cbc20/52,0';
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