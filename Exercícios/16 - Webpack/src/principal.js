// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
//importando um arquivo CSS para o webpack processar
//(precisa importar porque se não o webpack nao vai enxergar)
//procura index.js dentro de assets
import './assets'

const atendente = new Pessoa()
console.log(atendente.cumprimentar())