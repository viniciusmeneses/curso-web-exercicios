import React from 'react'

// Export default somente exporta uma função anonima
// Export normal pode exportar mais de uma função, objeto... e precisa ter nome
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }
