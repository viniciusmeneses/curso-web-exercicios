import React from 'react'
// Somente no index.js vamos importar o react-dom
import ReactDOM from 'react-dom'

// Importando o componente criado
// O NOME DO COMPONENTE DEVE OBRIGATORIAMENTE COMEÇAR COM LETRA MAIÚSCULA
// import Primeiro from './components/Primeiro'

// import BomDia from './components/BomDia'

// import Multi, { BoaNoite } from './components/Multiplos'
// import { BoaTarde, BoaNoite } from './components/Multiplos'


// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


// <h1>React 2</h1> - É um código em JSX que será feito o transpile para JS puro para funcionar no browser
// const elemento = <h1>React 2</h1>

// React-dom conversa diretamente com a DOM do browser

// Renderiza o primeiro componente do React através do react-dom
// Passando o componente e o elemento em que ele vai ser inserido dentro

// O componente importado pode ser acessado com JSX utilizando como se fosse tag HTML
// ReactDOM.render(<BomDia nome="Vinicius" idade={17} />, document.getElementById('root'))

// ReactDOM.render(
//   <div>
//     <Multi.BoaTarde nome="Vinicius"/>
//     <BoaNoite nome="Nicole"/>
//   </div>
// , document.getElementById('root'))

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      {/* Passando os filhos diretamente dentro do componente pai */}
      <Filho nome="Pedro"/>
      <Filho nome="Nicole"/>
    </Pai>
  </div>
, document.getElementById('root'))
