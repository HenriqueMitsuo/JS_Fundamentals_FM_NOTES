//! CLOSURE
const MyAlert = () => {

    const x = "Help i think i found a clue"
    const alerter = () => {

        console.log(x);
    };

    setTimeout(alerter, 1000);
    console.log("What happens first?");
};

MyAlert();