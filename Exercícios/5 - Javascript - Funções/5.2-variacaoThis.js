// Function normal: this pode variar dependendo de como a função é chamada

function f1() {
    console.log(this === window);
    //this aqui referencia o objeto global
}

//aqui o this vai referenciar o elemento pois foi chamada a partir do listener, então this === window vai ser false
document.getElementsByTagName('body')[0].addEventListener('click', f1, false);



// ARROW FUNCTION: O THIS NÃO VARIA

// this referencia o objeto global, pois foi escrita no contexto global
const f3 = () => console.log(this === window); //true

// vai retornar true, porque dentro de uma arrow function o this nao varia nunca
document.getElementsByTagName('body')[0].addEventListener('click', f3, false);

// o this vai ser definido no momendo em que a arrow function for definida
// this vai sempre referenciar o contexto em que a função foi escrita (this léxico)
