var calculoImc = require('./model/imc')
var readline = require ('readline')
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Seu peso em KG: ', function(pesoUsuario){
    let peso = pesoUsuario
    entradaDados.question('Sua altura em Cm: ', function(alturaUsuario){
        let altura = alturaUsuario
        console.log(calculoImc.calcularImc(peso,altura))
    })
})