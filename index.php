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
</body>

</html>
<html>
	<head>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

//This is where we display the data 

        //Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'Rain probability',
                       'width':500,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>

  <body>
    <!--Div that will hold the pie chart-->
    <div id="chart_div"></div>
  </body> 
</html>