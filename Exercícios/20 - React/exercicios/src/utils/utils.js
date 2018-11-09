import React from 'react'

// Exporta uma função que recebe as propriedades do componente
// e faz um map nos componentes filhos passados dentro do componente pai
// clonando cada filho e passando para ele as propriedades do pai (como se fosse herança)
// mais as propriedades do filho
export function childrenWithProps(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
        ...props,
        ...child.props
      })
  })
}
