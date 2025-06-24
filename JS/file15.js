// const student ={
//     name:"Suru",
//     age:21,
// };
// console.log(JSON.stringify(student));//converting object into JSON

const student = '{"name":"Sai","age":"21"}';
const newstudent = JSON.parse(student);
console.log(newstudent)
console.log(newstudent.name)