const ifElse = (condition, isTrue, isFalse) => {

    return condition ? isTrue() : isFalse();
}

ifElse(true, () => { console.log(true); }, () => { console.log(false); });

//! -----------------------------------------------------

// const increment = function (n) {
//     return n + 1;
// }
// const square = function (n) {
//     return n * n;
// }
// const doMath = function (n, func) {
//     return func(n);
// }

//? ES6
const increment = (n) => { return n + 1 };
const square = (n) => { return n * n };
const doMath = (n, callback) => { return callback(n) };

console.log(doMath(2, increment));
console.log(doMath(5, square));