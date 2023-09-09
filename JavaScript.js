

const calcular = () => {
    //validation
    const pesoBox = document.querySelector('#pesoBox')
    const alturaBox = document.querySelector('#alturaBox')

    if (!pesoBox.value || !alturaBox.value) {
        alert('Por favor, insira valores válidos para o peso e altura')
    }
    const peso = Number(pesoBox.value)
    const altura = Number(alturaBox.value)

    const vetor = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3']
    //calculo imc
    const calculo = (a, b) => {
       return a / Math.pow(b, 2)
    }    
    const imc = calculo(peso, altura).toFixed(2);
    //calculo nivel
    const nivel = (imc, vetor) => {
        for(let cont = 0; cont < vetor.length ; cont++){
            if (imc <= (18.75 + cont * 5)) {
                return vetor[cont]
            }
        } 
        return vetor[vetor.length - 1];
    }
    const situacao = nivel(imc, vetor);

    //coletar e montar resposta
    const setResultado = (x, y) => {
        const res = document.querySelector('.res')
        res.innerHTML = '';
        res.innerHTML += `O seu IMC é ${x} (${y}).`
    }
    setResultado(imc, situacao)
}   
