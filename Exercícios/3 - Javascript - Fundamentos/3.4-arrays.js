const valores = [1, 2, 3, 4];

valores[9] = 10; //Pula os indices e adiciona no final deixando itens em branco
console.log(valores);

valores.push({ id: 3}, false, null);
console.log(valores);

console.log(valores.pop()); //retorna o valor removido
delete valores[0]; //remove o item de determinado indice

console.log(valores);