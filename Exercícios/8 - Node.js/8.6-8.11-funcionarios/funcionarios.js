const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//axios - faz requisições http (ajax)

axios.get(url).then(response => {
    const funcionarios = response.data
    const resultado = funcionarios.filter(f => f.genero === 'F' && f.pais === 'China').reduce((func, funcAtual) => funcAtual.salario < func.salario ? funcAtual : func)
    console.log(resultado)
})
