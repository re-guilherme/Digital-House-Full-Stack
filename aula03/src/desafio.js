
const moment = require('moment')
const differenceInDays = require('date-fns/differenceInDays')

let dataInicial = moment('2020-05-09')
let dataFinal = moment('2021-05-15')

let diasDeDiferenca = dataFinal.diff(dataInicial, 'days')
console.log('A diferença de dias entre as duas datas é : ' + diasDeDiferenca)
//
let dataInicialFNS = new Date(2020,05,10)
let dataFinalFNS = new Date(2021,05,15)

let diasDeDiferencaFNS = differenceInDays(dataFinalFNS, dataInicialFNS)
console.log('A diferença de dias entre as duas datas é: ' + diasDeDiferencaFNS)



