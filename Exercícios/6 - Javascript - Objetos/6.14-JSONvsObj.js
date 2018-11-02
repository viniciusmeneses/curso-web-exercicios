//JSON - Javascript Object Notation é uma string que representa objetos em JS
//No JSON, funções não estão presentes, pois é um formato de dados/para manipular dados

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //função foi ignorada no JSON

//Todo atributo no JSON deve ser delimitado por aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "b": 3 }'))

//Strings devem ser delimitadas por aspas duplas também
console.log(JSON.parse('{ "a": 1.8, "b": "string", "c": true, "d": {}, "e": []}'))