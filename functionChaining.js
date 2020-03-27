const _ = {

    result: 0,

    add: function(A) {

        this.result += A;
        return this;
    },

    multiply: function(A) {

        this.result *= A;
        return this;
    }
}

let teste;
teste = _.add(5).add(5)
console.log(teste.result);
console.log(_.add(2).multiply(10));
console.log(_.add(5).add(5).add(5).add(5).add(5).add(5).add(5));