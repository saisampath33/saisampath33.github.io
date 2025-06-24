//objects
const student ={
    name: "Sampath",
    age: 21,
};
console.log(student)
console.log(student.name)
console.log(student["name"]) //both are same 
student.city = "Jalandhar" //city added
console.log(student)
student.city = "Amritsar" //overrided
console.log(student)
delete student.city //deleted key value of city
console.log(student)
console.log(Object.keys(student)) //all keys in object forms a array
console.log(Object.values(student))
