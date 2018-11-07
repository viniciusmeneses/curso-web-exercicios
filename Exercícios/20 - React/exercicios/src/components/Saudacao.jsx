import React, { Component } from 'react'

// Um componente criado a partir de uma classe possui outras coisas a mais como estado e etc
// do que um componente criado com função

// Para a classe funcionar temos que herdar o Component do react
export default class Saudacao extends Component {

  // Quando o estado é modificado, o componente é atualizado
  // Componente só é atualizado quando o estado muda

  // Como o render() não recebe parametros, as propriedades ficam disponíveis
  // dentro do this.props - onde this referencia o componente instanciado
  // Definindo estado incial

  // Para alterá-lo, utilizamos o método this.setState()
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  constructor(props) {
    // Obrigatório
    super(props)

    // Obrigando o this dentro da função setTipo referenciar o próprio componente
    // Para podermos usar onChange={this.setTipo} sem precisar usar uma arrow function
    this.setTipo = this.setTipo.bind(this)
  }

  setTipo(e) {
    // As propriedades recebidas por parâmetros sempre são SOMENTE LEITURA!!!
    // Para alteramos, usamos o estado (state) que podoe ser alterado
    this.setState({
      tipo: e.target.value
    })
  }

  setNome(e) {
    this.setState({
      nome: e.target.value
    })
  }

  // Para renderizar o JSX do componente, precisamos passar ele dentro do método
  // render() herdado do Component
  render() {
    // Destructuring
    const { tipo, nome } = this.state
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr/>
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
      </div>
    )
  }
}
