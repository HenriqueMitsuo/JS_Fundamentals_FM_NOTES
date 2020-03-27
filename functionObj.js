const add = function (a, b) {
    
    return a + b;
}

add.exampleProperty = 'teste 123 ';

add.multiply = function (num) {
    return num * 2;
};

console.log(add(1, 2));
console.log(add.exampleProperty);
console.log(add.multiply(2));