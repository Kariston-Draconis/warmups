console.log('Minigolf Score Totals')

var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]
var par = [3, 4, 5, 5, 3, 3, 4, 3, 5]

var total = function(golfer) {
  return golfer.reduce(function(a, b) {return a + b})
}

var totalScores = function(member) {
  console.log(total(member))
}

var parCompare = function(player) {
  if (total(player) > total(par)) {
    console.log ((total(player) - total(par)) + ' above par')
  } else {
    console.log ((total(par) - total(player)) + ' below par')
  }
}

var punt = function(friend) {
  if (total(friend) > total(par)) {
    console.log('You owe Fish $' + (total(friend) - total(par)))
  } else {
    console.log('Fish owes you $' + (total(par) - total(friend)))
  }
}
