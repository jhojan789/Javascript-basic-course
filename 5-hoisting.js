console.log(myName);

var myName = "Jhojan";
//result: undefined
//result: undefined

//this is how hoisting works
var myName = undefined;

console.log(myName);
//result: undefined
//result: undefined

var myName = undefined;

console.log(myName);

myName = "Jhojan";
//result: undefined
//result: "Jhojan"

hey();

function hey() {
    console.log("Hello " + myName);
}

//result: Hello Jhojan
//result: undefined
//the functions are declared before variables.






