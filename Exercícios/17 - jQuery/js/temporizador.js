(function ($) {
    $.fn.temporizador = function (opcoes) {
        // .extend(objDefault, obj) - recebe dois objetos
        // o primeiro vai conter um objeto que tem as propriedades e seus valores padrão
        // caso não sejam passadas, e o segundo vai ser o objeto para ser testado
        // se não existir as propriedades no segundo objeto, vai ser colocadas com o valor padrão
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        // Regex para validar o horario
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        // Um array com cada elemento representando o valor do grupo de captura
        // O primeiro índice é o próprio horário completo
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            // Retorna a hora em milissegundos
            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                // .toISOString() transforma a data em string no formato ISO 
                // SEM LEVAR EM CONTA O TIMEZONE!!! - O retorno vai ser sem timezone
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                // Primeiro caractere do índice 1 (primeiro grupo de captura)
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }
            else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)