//function arguments and return values
function greet(student){
    console.log(`Hello, ${student}!`);
}
greet("Sampath"); //calling the function with an argument

// function add(a, b){
//     return a + b; 
// }
// let res = add(5, 10); //calling the function and storing the return value
// console.log(`Sum: ${res}`); //printing the return value

function add(){
    console.log(arguments); //arguments object is an array-like object that contains the values of the arguments passed to the function
    console.log(arguments.length); //length of the arguments object
}
add(5, 10, 15);