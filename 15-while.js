let students = ['Maria','Sergio','Jose'];


function greetings(student) {
    console.log(`Hello ${student}`);
}

while (students.length > 0) {
    var student = students.shift();
    greetings(student);

}
