"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

var base_digit=[3,5,7];

describe("测试描述", function() {
  sinon.spy(console, 'log');

  it("digit_3", function() {
    var result = main(base_digit,3);
    var expect_string = 'Fizz';
    expect(expect_string).to.equal(result);
  });

  it("digit_5", function() {
    var result = main(base_digit,5);
    var expect_string = 'Buzz';
    expect(expect_string).to.equal(result);
  });

  it("digit_7", function() {
    var result = main(base_digit,7);
    var expect_string = 'Whizz';
    expect(expect_string).to.equal(result);
  });




});
