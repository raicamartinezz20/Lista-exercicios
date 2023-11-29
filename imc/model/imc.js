const calcularImc = function(valorPeso,valorAltura){

    let peso = valorPeso
    let altura = valorAltura
    let imc
    let status

    if (peso == '' || altura == '')
        console.log ('X -> ERROR: Obrigatório inserir TODOS os valores!')
        else if ( isNaN (peso) || isNaN (altura))
        console.log ('X -> ERROR: Obrigatório APENAS valores numéricos!')
        else{
            altura = altura / 100
            imc = Number (peso) / (Number (altura) * Number (altura))
            console.log ('IMC: ' + `${imc.toFixed(2)}`)
            } if (imc < 18.5)
                    status = 'Abaixo do peso!!' 
                    else if (imc >= 18.5 && imc <= 24.9)
                    status = 'Peso normal!!'
                    else if (imc >= 25 && imc <= 29.9)
                    status = 'Acima do peso!!!'
                    else if (imc >= 30 && imc <= 34.9)
                    status = 'Obesidade nível I'
                    else if (imc >= 35 && imc <= 39.9)
                    status = 'Obesidade nível II'
                    else if (imc >= 40){
                        status = 'Obesidade nível III'
                    } 

                    return status
            
}
module.exports = {calcularImc}