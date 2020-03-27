# JavaScript: From Fundamentals to Functional JS, v2

## Javascript primitives

- Undefined
- Boolean
- Number
- String
- BigInt
- Symbol

## Javascript non-primitives

- Object
- Array
- Dates
- Maps, Sets
- JSON
- Functions

## Acesso
  - Primitives = Acesso direto ao valor;
  - Non-Primitives = Acesso via referencia ao valor (Ponteiro);

## Objects:

- Exemplo
  - ```javascript
        let person = {};
        
        person.name = "John Doe";
        person.age = 20;
    ```
## Array:

- Array == Objects

- Exemplo 
    - ```javascript
        let person = [];
        
        person.name = "John Doe";
        person["age"] = 20;
        person[0] = "Foo";

        console.log(person);
    ```
    Output: ["Foo", name: 'John Doe', age: 20]
 
## Destructuring

- Exemplo 
    - ```javascript
        // ARRAY
        let [A, B] = [true, false];
        // OBJECT
        let {C, D} = {C: true, D: false};
        
        console.log(A) //! true;
        console.log(B) //! false;
    ```
    Output: true, false

## Arrow Function

- Não possui contexto
- Não possui 'this' proprio
- Utiliza o contexto do 'parente'
- Não tem acesso ao objeto 'arguments' de uma function comum
- Exemplo
  - ```javascript
        let soma = (num1, num2) => {

            return num1 + num2;
        }
    ```
## Variaveis Globais

- Exemplo
  - ```javascript
        globalvar = 1;
        
        OR

        window.globalvar = 1;
    ```

## Closure

- Função declarada dentro de outra função
- Utilizado para manter o contexto da função 'Pai'

