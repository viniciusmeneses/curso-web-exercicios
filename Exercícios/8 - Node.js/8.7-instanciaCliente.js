const contadorA = require('./8.7-instanciaUnica')
const contadorB = require('./8.7-instanciaUnica')

//() para executar a função retornada
const contadorC = require('./8.7-instanciaNova')()
const contadorD = require('./8.7-instanciaNova')()

contadorA.inc()
contadorA.inc()
//Como o node faz cache dos módulos importados
//Mesmo importando o mesmo módulo em constantes diferentes, como possuem a mesma
//referencia, eles compartilham o mesmo objeto fazendo cache, por isso contadorB tem o valor de A também
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
//Como a cada execução da função factory retorna um novo objeto/instancia, elas nao compartilham o mesmo valor
//Assim, o cache não ocorre pois são objetos diferentes
console.log(contadorD.valor)