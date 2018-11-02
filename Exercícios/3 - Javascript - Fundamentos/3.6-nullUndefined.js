let valor //nao inicializada - valor nao definido
console.log(valor); //undefined

//ausencia de valor
//não está apontando pra nenhum endereço de memória e nao tem nenhum valor
valor = null;

//NÃO ATRIBUIR VALOR UNDEFINED A UMA VARIÁVEL PARA LIMPÁ-LA
//EM VÊS DISSO, ATRIBUIR NULL PARA LIMPAR/ZERAR A VARIÁVEL

console.log(valor.toString()); //nao possui o prototype, pq é nulo, sem valor e sem referencia

//Quando nao tiver referencia ou valor, não irá ter prototype!