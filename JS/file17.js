//Closures
// function main(){
//     let b=1;
//     function sub(){
//         return b;
//     }
//     return sub;
// }

// let f1=main();
// console.log(f1());

// A closure lets a function remember and access variables from its outer scope, even after the outer function has finished running. This is useful for data privacy and maintaining state.
function main(){
    let b=1;
    function sub(){
        return b++;
    }
    return sub;
}

let f1=main();
console.log(f1());
console.log(f1());
console.log(f1());
