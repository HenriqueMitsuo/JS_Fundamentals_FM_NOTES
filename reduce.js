const _ = {

    Reduce: function(list, callback, initial) {
        
        let memo = initial;
        for(let index = 0; index < list.length; index++) {

            if(index === 0 && memo === undefined) {

                memo = list[0];
            }
            else {

                memo = callback(list[index], memo);
            }
        }
        return memo;
    }
}

console.log(_.Reduce([1, 2, 3], (v, sum) => v + sum, 10));