//global scope
var myName = 'Jhojan';
//local scope

function fullName(){
    var mySurname = 'Tobon';
    console.log(myName + ' ' + mySurname);

}

myName; //I can access it.
mySurname;// I cannot access it.