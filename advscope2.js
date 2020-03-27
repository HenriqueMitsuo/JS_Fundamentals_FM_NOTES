//! CLOSURE
const MyAlert = () => {

    const x = "Help i think i found a clue";
    let count = 0;

    const alerter = () => {

        console.log(`${x} ${++count}`);
    };

    return alerter;
};

//! QUAL É O VALOR DE COUNT?

const Func1 = MyAlert(); //? CONTEXTO 1

const Func2 = MyAlert(); //? CONTEXTO 2

Func1();
Func1();

Func2();