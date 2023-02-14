function MyClass(){
    this.getSI = function(p, n, r) {
       

        /* Calculate simple interest */
        let SI = (p * r * n) / 100;
        /* Calculate compound interest */
        if(p <0 || n<0 ||r<0 )
        {
            x = false
            return x
        }
        if(typeof(p)=='string'|| typeof(n)=='string'||typeof(r)=='string')
        {
            return false
        }
        else
        {
        let A = p * (Math.pow((1 + r / 100), n));
        let CI = A - p;

        /* Print the resultant value of SI */
        console.log("Simple Interest = " + SI);
        return SI;
       
        console.log("Compound interest is " + CI);
        }
    }
    this.getCI = function(p, n, r) {
        let SI = (p * r * n) / 100;
        /* Calculate compound interest */
        if(p <0 || n<0 ||r<0 )
        {
            x = false
            return x
        }
        if(typeof(p)=='string'|| typeof(n)=='string'||typeof(r)=='string')
        {
            return false
        }
        else{
        let A = p * (Math.pow((1 + r / 100), n));
        let ci = A - p; 
        CI = ci.toFixed(2)
        console.log("Compound interest is " + CI);
        return CI
    
    }
}}

module.exports = MyClass;
