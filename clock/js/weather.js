

function getWeather() {
	var forcastAPI = 'ADD-FORCAST-URL-HERE';
	var apiKey = 'ADD-KEY-HERE';
	var url = 'https://api.forecast.io/forecast/';
	var lati = ADD-LAT-HERE;
	var longi = ADD-LONG-HERE;
	var data;

	$.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
	  console.log(data);
	  $('#current-temp').html(Math.round(data.currently.temperature) + String.fromCharCode(176) + " " + data.currently.summary);
	  $('#current-temp-big').html(Math.round(data.currently.temperature) + String.fromCharCode(176) + " " + data.currently.summary);
	  $('#currently').html(data.minutely.summary);
	  $('#day-summary').html(data.hourly.summary);
	});
	
	//Update Every 5min
	var w = setTimeout(getWeather, 900000);
}
			