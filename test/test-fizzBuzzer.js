const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

//tests for our fizzBuzz function 
describe('fizzBuzzer', function(){
  it('should return fizz-buzz if number is divisible by 15', function(){
    const normalCases = [
      {number: 15, expected: 'fizz-buzz'},
      {number: 30, expected: 'fizz-buzz'},
      {number: 45, expected: 'fizz-buzz'},
      {number: 60, expected: 'fizz-buzz'},
      {number: 75, expected: 'fizz-buzz'}
    ]
    normalCases.forEach((test)=>{
     answer = fizzBuzzer(test.number);
     answer.should.equal(test.expected);
    });
  })
  it('should return fizz if numbeer is divisible by 3', function(){
    fizzBuzzer(9).should.equal('fizz');
  });
  it('should return buzz if number is divisible by 5', function(){
    fizzBuzzer(10).should.equal('buzz');
  });
  it('should raise error if args are not numbers', function(){
    (function(){fizzBuzz('string')}).should.throw(Error);
  });
});