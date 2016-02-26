"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

var base_digit = [3, 5, 7];
var base_digit_duplicate = [3, 5, 3];
var base_digit_over_range = [3, 5, 17];
var base_digit_over_3 = [3, 5, 7, 8];

describe("测试描述", function() {
  sinon.spy(console, 'log');

  it("wrong_base_digits_duplicate", function() {
    var result = main.checkBaseDigit(base_digit_duplicate);
    var expect_string = 'wrong base digits - duplicate';
    expect(expect_string).to.equal(result);
  });

  it("wrong_base_digit_over_range", function() {
    var result = main.checkBaseDigit(base_digit_over_range);
    var expect_string = 'wrong base digits - over range';
    expect(expect_string).to.equal(result);
  });

  it("wrong_base_digit_over_3", function() {
    var result = main.checkBaseDigit(base_digit_over_3);
    var expect_string = 'wrong base digits - more than 3 digits';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 3", function() {
    var result = main.checkDigit(base_digit,3);
    var expect_string = 'Fizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 5", function() {
    var result = main.checkDigit(base_digit,5);
    var expect_string = 'Buzz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 7", function() {
    var result = main.checkDigit(base_digit,7);
    var expect_string = 'Whizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 15", function() {
    var result = main.checkDigit(base_digit,15);
    var expect_string = 'FizzBuzz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 21", function() {
    var result = main.checkDigit(base_digit,21);
    var expect_string = 'FizzWhizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 70", function() {
    var result = main.checkDigit(base_digit,70);
    var expect_string = 'BuzzWhizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 105", function() {
    var result = main.checkDigit(base_digit,105);
    var expect_string = 'FizzBuzzWhizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 13", function() {
    var result = main.checkDigit(base_digit,13);
    var expect_string = 'Fizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 35", function() {
    var result = main.checkDigit(base_digit,35);
    var expect_string = 'Fizz';
    expect(expect_string).to.equal(result);
  });

  it("single digit - 41", function() {
    var result = main.checkDigit(base_digit,41);
    var expect_string = '41';
    expect(expect_string).to.equal(result);
  });
it("digit_3", function() {
  var result = main.main(base_digit, 3);
  var expect_string = '1\n2\nFizz\n';
  expect(expect_string).to.equal(result);
});

it("digit_5", function() {
  var result = main.main(base_digit, 5);
  var expect_string = '1\n2\nFizz\n4\nBuzz\n';
  expect(expect_string).to.equal(result);
});

it("digit_7", function() {
  var result = main.main(base_digit, 7);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n';
  expect(expect_string).to.equal(result);
});

it("digit_11", function() {
  var result = main.main(base_digit, 11);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\n';
  expect(expect_string).to.equal(result);
});

it("digit_15", function() {
  var result = main.main(base_digit, 15);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n';
  expect(expect_string).to.equal(result);
});

it("digit_21", function() {
  var result = main.main(base_digit, 21);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizzWhizz\n';
  expect(expect_string).to.equal(result);
});

it("digit_23", function() {
  var result = main.main(base_digit, 23);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizzWhizz\n22\nFizz\n';
  expect(expect_string).to.equal(result);
});

it("digit_23", function() {
  var result = main.main(base_digit, 23);
  var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizzWhizz\n22\nFizz\n';
  expect(expect_string).to.equal(result);
});


});
