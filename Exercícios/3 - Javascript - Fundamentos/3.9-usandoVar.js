{
    {
        {
            { 
                var sera = 'Será???'; 
            }
        }
    }
} //4 blocos de código {}

console.log(sera); //variável declarada com var visivel fora dos blocos de código (sem ser função)

function teste() {
    var local = 123;
}
teste()

//console.log(local); não acessível

/*
variável criada fora de uma função, ficará salva dentro do objeto global

variável com var: tem somente dois tipos de escopos.
local: criada dentro de uma função
global: criada fora de uma função
*/

//--------------------//
var num1 = 1;
{
    var num1 = 2;
    console.log('dentro', num1);
}
console.log('fora', num1);
//Mesmo resultado porque bloco de código {} não cria escopo local quando utilizado var