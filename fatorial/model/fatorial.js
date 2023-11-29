const calcularFatorial = function(valorFatorial){
let fatorial = Number (valorFatorial)

if (fatorial == 0)
        console.log('X -> ERROR: Não existe fatorial do número 0')
else if (fatorial == 1)
        console.log ('X -> ERROR: Necessário um valor que seja maior que 1')
else if (isNaN(fatorial))
        console.log ('X -> ERROR: Obrigatório apenas valores numéricos')
else if (fatorial == '')
        console.log('X -> ERROR: Obrigatório inserir um valor')
    else{
            let resultado = 1
            var fatorialString = `Fatorial do número ${fatorial} é: ${fatorial}`
            for (let contador = fatorial; contador >= 2; contador --){
            resultado = resultado * contador
            fatorialString += `x ${contador - 1}`
        }
            fatorialString += `= ${resultado}`
        } 
                return fatorialString
            
            } 
        const exibirResultado = function (valorFatorial){
        console.log(calcularFatorial(valorFatorial))
}

module.exports = {exibirResultado}

            
         
            
        
    
