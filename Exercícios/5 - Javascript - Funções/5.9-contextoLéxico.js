//Contexto léxico: contexto físico onde as coisas foram definidas
const valor = 'Global'

//a função foi declarada dentro do contexto léxico do módulo do node
function minhaFunc() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFunc()
}

exec()
//Global, porque quando uma função é declarada, ela possui seu conteúdo interno
//e também carrega consigo o contexto onde ela foi declarada
//assim, ela vai procurar 'valor' dentro do escopo léxico onde ela foi definida