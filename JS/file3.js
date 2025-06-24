let a = 10
let b = 20
if(a>b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${b} is greater than ${a}`)
}
let c = 10
if(c){
    console.log("c is defined")
}else{
    console.log("c is not defined")
}
// Ternary operator
let x=5;
let y=2;
x>y?console.log(`${x} is greater`):console.log(`${y} is greater`);
x>y && console.log(`${x} is greater`); 
x<y || console.log(`${y} is greater`); //short-circuit evaluation

let d =20 //if anything is assigned to d, it will be used
// let d //if d is not assigned, it will be undefined
let value = d || 10
console.log(value); // 10, because a is undefined

let f
let val = f ?? 10 //nullish coalescing operator
console.log(val); // 10, because f is undefined
// ?? is a logical operator that returns its right-hand side operand when its left-hand side operand is either null or undefined