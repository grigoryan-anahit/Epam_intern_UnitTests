const Calc = require('../../app/calculator');
const chai = require('chai');
const { expect } = require('chai');


describe('should add two numbers', function() {
    let calc=new Calc();

    it('should return 12 when called with 9 and  3', function() {
        expect(calc.add(9,3)).to.be.equal(12);
    });

    it('should return 4 when called with 6 and -2', function() {
        expect(calc.add(6,-2)).to.be.equal(4);
    });


    it('should throw an error when called with 7 and a', function () {

        expect(()=>calc.add(7,'a')).to.throw(`Type only number`);
    });

});