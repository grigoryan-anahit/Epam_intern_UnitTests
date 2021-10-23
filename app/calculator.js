class Calc{
    constructor(){

    }
    add(a,b){
        let sum;
        if(typeof a==='number' && typeof  b==='number' ){
            return sum=a+b;
        } else {
            throw new Error('Type only number')
        }
    }
    multiply(x,y){
        let m;
        if(typeof x==='number' && typeof  y==='number'){
            return m=x*y;
        } else {
            throw new Error('Type only number')
        }
    }
}
module.exports=Calc;