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


