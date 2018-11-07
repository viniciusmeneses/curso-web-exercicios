import React from 'react'
// import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'

export default props =>
  <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
      {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
      Utilizando rest/spread para passar todas as propriedades do pai com os mesmos valores para o filho
      <Filho {...props} />
      Trocando somente o nome...
      <Filho {...props} nome="Nicole" /> */}

      {/* props.children - para dizer onde os filhos passados dentro do componente vao ser renderizados */}
      {/* {props.children} */}

      {childrenWithProps(props)}


    </ul>
  </div>
