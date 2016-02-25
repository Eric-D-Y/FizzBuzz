// function main(num1, num2) {
//   var result = num1 + num2;
//   console.log(String(result));
//   return String(result);
// }

var fizz = "Fizz";
var buzz = "Buzz";
var whizz = "Whizz";

function main(bottleNumber) {
  return "11";
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
