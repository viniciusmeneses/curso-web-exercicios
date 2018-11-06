import React from 'react'
// Somente no index.js vamos importar o react-dom
import ReactDOM from 'react-dom'

// Importando o componente criado
import Primeiro from './components/Primeiro'


// <h1>React 2</h1> - É um código em JSX que será feito o transpile para JS puro para funcionar no browser
// const elemento = <h1>React 2</h1>

// React-dom conversa diretamente com a DOM do browser

// Renderiza o primeiro componente do React através do react-dom
// Passando o componente e o elemento em que ele vai ser inserido dentro

// O componente importado pode ser acessado com JSX utilizando como se fosse tag HTML
ReactDOM.render(<Primeiro />, document.getElementById('root'))
