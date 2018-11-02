//Módulo do node para executar tarefas agendadas (cron)
//Pode ser qualquer tipo de tarefa!
const schedule = require('node-schedule')

//método scheduleJob vai definir uma tarefa no determinado tempo, e passa uma funçao de callback que vai ser executada no tempo certo
//o primeiro parâmetro é uma string no formato cron que indica quando vai ser executada a tarefa
//no caso atual é: de 5 em 5 segundos não importando o dia, mes, hora, etc...
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

//cancelando uma tarefa
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1!')
}, 20000)

//criando uma regra para ser usada no lugar da string cron
//é a mesma coisa que se fosse usar string cron
const regra = new schedule.RecurrenceRule()
//dias da semana: 0 é domingo, 6 é sábado
regra.dayOfWeek = new schedule.Range(1, 5)
regra.second = 30

//vai executar de segunda a sexta, quando o segundo for igual a 30
const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
