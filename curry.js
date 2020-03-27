const _ = {

    Curry: function(fnc) {

        return (arg1) => {

            return (arg2) => {

                return fnc(arg1, arg2)
            }
        }
    }
}

let ab = function(a, b) {

    return [a, b];
}

let curried = _.Curry(ab);

console.log(curried(1));
console.log(curried(2)(5));