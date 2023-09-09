

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
    let nivel;
    switch (true) {
        case (imc <= 18.75):
            nivel = vetor[0]
            break;
        case (imc <= 24.9):
            nivel = vetor[1]
            break;
        case (imc <= 29.9):
            nivel = vetor[2]
            break;
        case (imc <= 34.9):
            nivel = vetor[3]
            break;
        case (imc <= 39.9):
            nivel = vetor[4]
            break;
        case (imc >= 40):
            nivel = vetor[5]
            break;
        default:
            break
    }
    //coletar e montar resposta
    const setResultado = (x, y) => {
        const res = document.querySelector('.res')
        res.innerHTML = '';
        res.innerHTML += `O seu IMC é ${x} (${y}).`
    }
    setResultado(imc, nivel)
}   
