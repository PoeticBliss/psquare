exports.check = function (num) {
  // convert input to integer
  num = parseInt(num);
  // get the square root of the number
  var x = parseInt(Math.sqrt(num));
  // return true or false
  return ((x * x) === num);
}
