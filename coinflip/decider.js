var headFlips;
var tailsFlips;

var coinFlip = function() {
  var result = Math.random();
  if (result < 0.5) {
    console.log('Heads');
    document.getElementById("result").innerHTML = "Heads"
  } else {
    console.log('Tails');
    document.getElementById("result").innerHTML = "Tails";
  }
}
