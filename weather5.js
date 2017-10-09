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

//Weather Icons
  $("#icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $("#icon2").html("<img src='http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $("#icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $("#icon4").html("<img src='http://openweathermap.org/img/w/" + data.list[9].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $("#icon5").html("<img src='http://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

//Temperatures
  //var cTemp=((data.main.temp)-273.15).toFixed(2);
  //var fTemp=((data.main.temp)*(9/5)-459.67).toFixed(2);
  var temp1=data.list[0].main.temp;
  var temp2=data.list[1].main.temp;
  var temp3=data.list[2].main.temp;
  var temp4=data.list[3].main.temp;
  var temp5=data.list[4].main.temp;
  $("#temp1").html(temp1);
  $("#temp2").html(temp2);
  $("#temp3").html(temp3);
  $("#temp4").html(temp4);
  $("#temp5").html(temp5);

//Weather Conditions
  var cond1=data.list[0].weather[0].description;
  var cond2=data.list[3].weather[0].description;
  var cond3=data.list[6].weather[0].description;
  var cond4=data.list[9].weather[0].description;
  var cond5=data.list[12].weather[0].description;
  $("#cond1").html(cond1.toUpperCase());
  $("#cond2").html(cond2.toUpperCase());
  $("#cond3").html(cond3.toUpperCase());
  $("#cond4").html(cond4.toUpperCase());
  $("#cond5").html(cond5.toUpperCase());
  });

  });
});
