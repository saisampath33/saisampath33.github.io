//array methods/foreach is js array method
const points = [2, 5, 3, 2, 1, 8];
// points.forEach((value) => {
//   console.log(value); //just printing the value
// });
// console.log("Value and their index in an array")
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });
// points.forEach((a, b, c) => {
//     console.log(c[b]); //Print the element at index b in array c.
//     // console.log(a);
// });

//syntax
// array.forEach((value, index, array) => {
//   // code to run for each item
// });

// value	Current item in the array 1st
// index	Position of that item  2nd
// array	The entire array being looped  3rd

// const newArr = points.map((value,index)=>(value+=5));
// const newArr = points.map((value,index)=>{
//     return (value+=5);
// })

// console.log(newArr) //new array will have elements added with 5
//map is used to create a new array with the same or modified value 
// Use forEach for side effects, use map when you want a new array with transformed values.

const newarr = points.filter((value)=>value>2);
console.log(newarr);  //returns the value greater than 2 in a array

const result = points.find((value)=>value>2);
console.log(result); //it finds the first element in array which is greather than 2 and only prints one element 

const res = points.reduce((sum,value)=>{
    return sum+value;
},0); //the sum default value is 0
console.log("sum:",res);

const newarr1 = points.map((value)=>value>2);
console.log(newarr1);
