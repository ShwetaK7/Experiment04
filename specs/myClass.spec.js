

const { expect } = require("chai");
var chai = require("chai");
var assert = chai.assert;
var MyClass = require("../src/myClass.js")

var myClass = new MyClass()
describe("Experiment 04 Shweta Kharat", function(){
/*
    it("Test the Simple Interest", function(done) {
    p = 15;
    n = 10;
    r = 5;
    assert.equal(myClass.getSI(p,n,r),7.5);
    done();
});

it("Test the Simple Interest with Input Negative ", function(done) {
    p = 15;
    n = -10;
    r = 5;
    assert.equal(myClass.getSI(p,n,r),false);
    done();
});

it("Test the Simple Interest with Input 0 ", function(done) {
    p = 15;
    n = 0;
    r = 5;
    assert.equal(myClass.getSI(p,n,r),0);
    done();
});
*/
it("Test the Simple Interest with Input string ", function(done) {
    p = 15;
    n = 'abc';
    r = 5;
    assert.equal(myClass.getSI(p,n,r),false);
    done();
});
/*
it("Test the Simple Interest with Input Fraction ", function(done) {
    p = 15;
    n = 10;
    r = 5.5;
    assert.equal(myClass.getSI(p,n,r),'8.25');
    done();

});

// Compound Interest

it("Test the Compound Interest ", function(done) {
    p = 150;
    n = 10;
    r = 5;
    assert.equal(myClass.getCI(p,n,r),94.33);
    done();
});

it("Test the Compound Interest with Input Negative", function(done) {
    p = 150;
    n = -10;
    r = 5;
    assert.equal(myClass.getCI(p,n,r),false);
    done();
});

it("Test the Compound Interest with Input String ", function(done) {
    p = 150;
    n = 'abc';
    r = 5;
    assert.equal(myClass.getCI(p,n,r),false);
    done();
});
/*

it("Test the Compound Interest with Input 0 ", function(done) {
    p = 150;
    n = 0;
    r = 5;
    assert.equal(myClass.getCI(p,n,r),0.00);
    done();
});

it("Test the Compound Interest with Input Fraction ", function(done) {
    p = 150;
    n = 5.5;
    r = 5;
    assert.equal(myClass.getCI(p,n,r),46.17);
    done();
});
*/
});