//! USAR NO BROWSER
const makeTimer = () => {

    let elapsed = 0;

    const stopWatch = () => {

        return elapsed;
    }

    const increase = () => {

        elapsed++;
    }

    setInterval(increase, 1000);

    return stopWatch;
}

let timer = makeTimer();

timer();

timer();