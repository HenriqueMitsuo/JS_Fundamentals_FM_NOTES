const _ = {

    Compose: function(fnc1, fnc2) {

        return (arg) => {

            const result = fnc2(arg);

            return fnc1(result);
        }
    }
}

const consider = (name) => {
    
    return `I think it could be ${name}`;
};

const exclaim = (statement) => {

    return `${statement.toUpperCase()}!`;
};

const blame = _.Compose(consider, exclaim);

console.log(blame("you"));