// function main(num1, num2) {
//   var result = num1 + num2;
//   console.log(String(result));
//   return String(result);
// }

var fizz = "Fizz"; //first spec digit
var buzz = "Buzz"; //second spec digit
var whizz = "Whizz"; //third spec digit

function main(base_digit, maxDigit) {
  var result = "";
  for (var i = 1; i <= maxDigit; i++) {
    var fbw = checkDigit(base_digit,i);
    result += (fbw == "" ? i : fbw) + "\n";
  }
  return result;
}

function checkDigit(base_digit, digit) {
  if (("" + digit).indexOf(base_digit[0]) > -1) {
    return fizz;
  }
  var result = "";
  if (digit % base_digit[0] == 0) {
    result += fizz;
  }
  if (digit % base_digit[1] == 0) {
    result += buzz;
  }
  if (digit % base_digit[2] == 0) {
    result += whizz;
  }
  return result;
}


module.exports = main;
