//declarative

function myFunction1(){
    return 3;
}

//to call
myFunction1();

//expressive or anonym with two parameters

var myFunction2 = function(a,b){
    return a + b;
};
//to call with two arguments
myFunction2(2,3);

//to concatenate - shortcut of ` on mac is option + }
var a = "Jhojan" + " " + "Tobon";
var b = `Jhojan ${"Tobon"}`; 