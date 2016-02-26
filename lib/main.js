// function main(num1, num2) {
//   var result = num1 + num2;
//   console.log(String(result));
//   return String(result);
// }

var fizz = "Fizz"; //first spec digit
var buzz = "Buzz"; //second spec digit
var whizz = "Whizz"; //third spec digit

function main(base_digit, maxDigit) {
  console.log("main input : " + base_digit);
  console.log("main input : " + maxDigit);
  var result = checkBaseDigit(base_digit);
  if (result != "correct base digit") {
    return result;
  }
  result = "";
  for (var i = 1; i <= maxDigit; i++) {
    var fbw = checkDigit(base_digit, i);
    result += (fbw == "" ? i : fbw) + "\n";
  }
  return result;
}

function checkBaseDigit(base_digit) {
  console.log("checkBaseDigit input : " + base_digit);
  var sortDigit = base_digit.sort(sortNumber);
  var result = "correct base digit";
  if (sortDigit.length > 3) {
    result = "wrong base digits - more than 3 digits";
  }
  if (sortDigit[sortDigit.length - 1] > 9 || sortDigit[0] < 1) {
    result = "wrong base digits - over range";
  }
  for (var i = 0; i < sortDigit.length - 1; i++) {
    if (sortDigit[i] == sortDigit[i + 1]) {
      result = "wrong base digits - duplicate";
    }
  }
  return result;
}

function sortNumber(a, b) {
  return a - b;
}


function checkDigit(base_digit, digit) {
  console.log("checkDigit input : " + base_digit);
  console.log("checkDigit digit : " + digit);
  if (digit.toString().indexOf(base_digit[0]) > -1) {
    return fizz;
  }
  if (!isDigitSpec(base_digit,digit)) {
    return String(digit);
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

function isDigitSpec(base_digit,digit){
  if(digit%base_digit[0]==0 ||digit%base_digit[1]==0 ||digit%base_digit[2]==0){
    return true;
  }
  return false;
}


module.exports = {
  main,
  checkBaseDigit,
  checkDigit
};
