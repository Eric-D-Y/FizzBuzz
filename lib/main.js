// function main(num1, num2) {
//   var result = num1 + num2;
//   console.log(String(result));
//   return String(result);
// }

var fizz = "Fizz"; //first
var buzz = "Buzz"; //second
var whizz = "Whizz"; //third

function main(base_digit, digit) {
  var result = "";
  if (digit % base_digit[0] == 0) {
    return result = fizz;
  }
  if (digit % base_digit[1] == 0) {
    return result = buzz;
  }
  if (digit % base_digit[2] == 0) {
    return result = whizz;
  }
  return result;
}

String.prototype.format = function() {
  var args = arguments;
  args['{'] = '{';
  args['}'] = '}';
  return this.replace(
    /{({|}|-?[0-9]+)}/g,
    function(item) {
      var result = args[item.substring(1, item.length - 1)];
      return typeof result == 'undefined' ? '' : result;
    }
  );
};


module.exports = main;
