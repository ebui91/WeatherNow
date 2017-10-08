$(document).ready(function(){
  var latitude;
  var longitude;

//Geolocation
  $.getJSON("http://ip-api.com/json", function(geoData){
    latitude=geoData.lat;
    longitude=geoData.lon;
    var city=geoData.city;
    var region=geoData.regionName;
    var country=geoData.country;
    var api="http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=7d768f2db1dc9554926e225b6ff8e222";

    $("#location").html(city+", "+region+", "+country);

  $.getJSON(api, function(data){
//Conversion from UNIX timestamp to actual date
  var timestamp=data.list[0].dt;
  var a=new Date(timestamp*1000);
  var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayOfWeek=days[a.getDay()]
  $("#day1").html(dayOfWeek);
  $("#day2").html(days[(a.getDay())+1]);
  $("#day3").html(days[(a.getDay())+2]);
  $("#day4").html(days[(a.getDay())+3]);
  $("#day5").html(days[(a.getDay())+4]);
  });

  });
});
