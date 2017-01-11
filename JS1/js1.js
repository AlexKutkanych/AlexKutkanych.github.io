//first task
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

var x = prompt("Please enter the base", '');
var n = prompt("Please enter the exponent", '');
console.log(pow(x,n));
// alert(pow(x,n));
