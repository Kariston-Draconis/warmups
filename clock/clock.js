var seconds = new Date().getSeconds();
$('#seconds').text(seconds);
var minutes = new Date().getMinutes();
$('#minutes').text(minutes);
var hours = new Date().getHours();
$('#hours').text(hours);

setInterval(function(){
  seconds = new Date().getSeconds();
  $('#seconds').text(seconds);
  minutes = new Date().getMinutes();
  $('#minutes').text(minutes);
  hours = new Date().getHours();
  $('#hours').text(hours)
}, 1000);
