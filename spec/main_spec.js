"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

var base_digit = [3, 5, 7];
var base_digit_wrong = [3, 5, 3];

describe("测试描述", function() {
  sinon.spy(console, 'log');

  it("wrong_base_digits", function() {
    var result = main(base_digit_wrong, 3);
    var expect_string = 'wrong base digits';
    expect(expect_string).to.equal(result);
  });

  it("digit_3", function() {
    var result = main(base_digit, 3);
    var expect_string = '1\n2\nFizz\n';
    expect(expect_string).to.equal(result);
  });

  it("digit_6", function() {
    var result = main(base_digit, 6);
    var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\n';
    expect(expect_string).to.equal(result);
  });

  it("digit_8", function() {
    var result = main(base_digit, 8);
    var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\n';
    expect(expect_string).to.equal(result);
  });


  it("digit_13", function() {
    var result = main(base_digit, 13);
    var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\n';
    expect(expect_string).to.equal(result);
  });

  it("digit_23", function() {
    var result = main(base_digit, 23);
    var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizzWhizz\n22\nFizz\n';
    expect(expect_string).to.equal(result);
  });




});
