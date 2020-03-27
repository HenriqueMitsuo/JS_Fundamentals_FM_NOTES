var RESULT;

var fn1 = function() {

    var where = "outer";
    {
        let where = "inner";
    }

    return RESULT = where;
}

console.log(fn1());

RESULT = null;

var name = "outer"
var fn2 = function () {

    return RESULT = name;
}

RESULT = null;

var outerName = "outer"
var fn3 = function () {
    var innerName = "inner"
    return RESULT = outerName + innerName;
}

console.log(fn3());

RESULT = null;

var outerCount = 1;
var fn4 = function () {
    outerCount += 1;
    return RESULT = outerCount;
}

console.log(fn4());
console.log(fn4());