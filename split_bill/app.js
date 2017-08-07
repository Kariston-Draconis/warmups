var splitTheBill = function(bill) {

  var paid = [];

  for (var amount in bill) {
    paid.push(bill[amount]);
  };

  function getTotal(total, num) {
    return total + num;
  };

  var sum = paid.reduce(getTotal);
  var average = sum / paid.length;
  var split = {};

  for (var amount in bill) {
    var key = amount
    var difference = bill[amount] - average;
    split[key] = difference;
  };

  return split
}
