if (true) {
    console.log("Hello")
}
//result: Hello

if (false) {
    console.log("Hello");
}else{
    console.log("false");

}
//result: false

if (false) {
    console.log("Hello");
}else if (true){
    console.log("world");
    
}else{
    
    console.log("false");
}
//result: world

var edad = 18;

if (edad === 18){
    console.log("You can vote for the first time");
    
}else if(edad > 18){
    console.log("You can vote again");
    
}else{
    console.log("You cannot vote");

}
