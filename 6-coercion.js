//implicit coercion
var a = 4 + "7";
typeof a;

//result: string
var b = 4 * "7";
typeof b;
//result: 'number' 
//b=28

//explicit coercion
var a = 20;
typeof a;
//result: number
var b = a + "";
typeof b;
//result: string

var c = String(a);
typeof c;
//result: string

var d = Number(c);
//result: number

