//Promises (promessa): utilizamos quando queremos fazer processamento assíncrono
//Quando a promessa é resolvida, ela pode ter sucesso (ser aceitada) ou ser rejeitada
//Ela utiliza o conceito de que a promessa pode ser atendida ou rejeitada

//função que vai retornar uma promessa, e que depois de X segundos vai resolver/aceitar a promessa
function falarDepoisDe(segundos, frase) {
    //O objeto vai receber uma função anonima de callback recebendo o parametro chamado resolve e reject
    //Resolve: é uma função que vai ser chamada quando a promessa for atendida
    //Reject: funçào chamada quando a promessa for recusada
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //A função de resolução ou rejeição aceita SOMENTE 1 PARAMETRO
            resolve(frase)

            //reject(frase) - rejeita a promessa (erro) passando por parâmetro a frase, e terá que ser tratada com o método catch!
        }, segundos * 1000)
    })
} 

//O objeto promise retornado possui uma função chamada then

//Quando encadeamos o then, o retorno do then anterior sera passado para o próximo
falarDepoisDe(3, 'Legal!')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    //tratando erro quando rejeitar a promessa - só pode ser chamado 1 vez
    .catch(e => console.log(e))