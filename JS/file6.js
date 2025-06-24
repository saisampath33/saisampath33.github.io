//callback function
// let f1 = () => {
//   console.log("This is function f1");
// };
// let main = (callback) => {
//   callback(); //it calls the funxtion f1 coz f1 is called into the main
// };
// main(f1);

// let main = (callback) => {
//     callback();
// };
// main(() => {
//   console.log("Hello World");  //calling main() by passing a function of hello world into it
// });

function f1(x) {
    console.log(x);
}
let main = () => f1(5);
main();


console.log(typeof main) //function