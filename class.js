class workshop {

    constructor(teacher) {

        this.teacher = teacher;
    }

    ask(question) {

        console.log(`${this.teacher}, ${question}`);
    }
}

let JS1 = new workshop("Joao");
let JS2 = new workshop("Maria");

JS1.ask("Pergunta 1");
JS2.ask("Pergunta 2");