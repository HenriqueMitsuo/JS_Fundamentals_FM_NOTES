// const constructArray = function () {

//!     const arr = Array.prototype.slice.call(arguments);

//     arr.push("the billiards room");
//     return arr.join(" ");
// }

// const constructArray = function () {

//!     const arr = Array.from(arguments);

//     arr.push("the billiards room");
//     return arr.join(" ");
// }

const _ = {

    From: function (arr) {
        
        return Array.prototype.slice.call(arr);
    }
}

const constructArray = function () {

    const arr = _.From(arguments);

    arr.push("the billiards room");
    return arr.join(" ");
}

console.log(constructArray("Was", "it", "in"));