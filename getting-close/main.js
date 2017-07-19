var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}];

var currentLocation = { lat: 37.767165, long: -122.5 };

var results = [];

myResults.forEach(function(item) {
  var xDiff = item.location.lat - currentLocation.lat;
  var yDiff = item.location.long - currentLocation.long;
  var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
});
