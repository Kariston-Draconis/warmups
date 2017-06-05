console.log('The Board')
console.log('---------')

var line = '# ';
var row = line.repeat(8);
var rowNext = row.split('').reverse().join('');
var join = row + '\n' + rowNext + '\n';
console.log(join.repeat(4))
