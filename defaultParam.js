//? ES5 -
// const soma = function (a, b) {
//!     b = b || 2;
//     return a + b;
// }

const soma = function (a, b = 2) {

    return a + b;
}

console.log(soma(2));
console.log(soma(2, 5));