import React from 'react'
// Somente no index.js vamos importar o react-dom
import ReactDOM from 'react-dom'

// <h1>React 2</h1> - É um código em JSX que será feito o transpile para JS puro para funcionar no browser
// const elemento = <h1>React 2</h1>

// React-dom conversa diretamente com a DOM do browser

// Renderiza o primeiro componente/HTML do React através do react-dom
// Passando o componente e o elemento em que ele vai ser inserido dentro
ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
