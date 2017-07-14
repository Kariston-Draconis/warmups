var a = "hagkbagkbkfbnkgkabgkbglkabgkebgkebgkbg"
var b = "nuuhrigykyggfbnvnbnakuhgkhgoaerhgerhlnfdb"

var longest = function(first, second) {
  return _.uniq(first.concat(second).split('').sort()).join('');
}
