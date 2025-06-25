//promise-it may or maynot fulfill in future
//use promises when dealing with any delay or async operations
// const f1 =()=>{
//      setTimeout(()=>{
//         return 5; //if 5 is returned 1 or 2 seconds after then it is problem
//      },1000);
// }
// const f2 = (x)=>{
//     console.log(x+6);
// };
// const n=f1();
// f2(n)


// const f1 = () => 5;
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f2(f1()); // Output: 11


// const f1=()=>{
//     return new Promise((resolve,reject)=>{ //creating a promise custom async
//         // resolve(5);
//         reject("Something Went Wrong")
//     });
// };
// const f2 = (x)=>{
//     console.log(x+6);
// };
// f1().then((n)=>f2(n))
//     .catch((err)=>console.log(err))
//.then is used when promise is resolved
// Buy = Start the Promise (begin the async operation)
// Pay = Complete the Promise (resolve or reject the result)
//then and catch are consuming the promise
// const f1=(n)=>{
//     return new Promise((resolve,reject)=>{
//         if(n<0){
//             reject("Invalid Input")
//         }
//         else{
//             resolve(n);
//         }
//     });
// };
// const f2 = (x)=>{
//     console.log(x+6);
// };
// f1(3).then((n)=>f2(n))
//     .catch((err)=>console.log(err))


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach(element => {
//             // console.log("***Name***")
//             // console.log(element.name);
//             // console.log("***Email***")
//             // console.log(element.email);
//             console.log(`Name: ${element.name} Email:${element.email}`);
//         });
//     })
//     .catch((err)=>console.log(err));

//to avoid many .then js introduced async and await


// An async function always returns a Promise.
// Inside an async function, you use await to pause execution until a Promise is resolved or rejected.
const fetchData =  async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users")
    const data  = await res.json();
    data.forEach((value)=>{
        console.log(value.name);
    });
};
fetchData();