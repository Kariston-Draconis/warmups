console.log('Palindrome Tester');

function palinTest(string) {
  var remove = /[\W_]/g;
  var lowRegString = string.toLowerCase().replace(remove, '');
  var reverseString = lowRegString.split('').reverse().join('');
  return reverseString === lowRegString;
}
