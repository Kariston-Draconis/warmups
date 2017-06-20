var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH"
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
