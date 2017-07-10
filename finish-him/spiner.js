var spiner = function(string) {
  return string.replace(/ |_|,|\./g, "-").toLowerCase();
}

// better way
// var spiner = function(string) {
//   string = string.toLowerCase();
//   arr = string.split(/[^A-Za-z]/);
//   return arr.join("-")
// }
