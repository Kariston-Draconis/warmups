console.log('Caesar Cipher');

var btn = document.querySelector('button');
var message = document.querySelector('#code');
var output;

var convert = function(message) {
  var array = []
  for (var i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
      array.push(message.charAt(i));
    } else if (message.charCodeAt(i) < 67) {
      array.push(String.fromCharCode(message.charCodeAt(i) + 23));
    } else {
      array.push(String.fromCharCode(message.charCodeAt(i) - 3));
    }
  }
  output = array.join("");
  document.querySelector('span').innerHTML = output;
}

btn.addEventListener('click', function() {
  convert(message.value)
})
