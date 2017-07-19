var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";

var longest = function(first, second) {
  return _.uniq( first.concat(second).split('').sort() ).join('');
}
