const Calc = require('../../app/calculator');
const chai = require('chai');
const { expect } = require('chai');


describe('should multiply two numbers', function() {
    let calc=new Calc();

    it('should return 18 when called with 9 and  2', function() {
        expect(calc.multiply(9,2)).to.be.equal(18);
    });

    it('should return 0 when called with 6 and 0', function() {
        expect(calc.multiply(6,0)).to.be.equal(0);
    });


    it('should throw an error when called with 7 and a', function () {

        expect(()=>calc.multiply(7,'a')).to.throw(`Type only number`);
    });

});