const vetor = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
'Obesidade grau 2', 'Obesidade grau 3']

const calcular = () => {
    let peso = parseFloat(document.querySelector('#pesoBox').value)
    let altura = parseFloat(document.querySelector('#alturaBox').value)
    let res = document.querySelector('.res')
    
    const calculo = (a, b) => a / Math.pow(b, 2)
    const imc = calculo(peso, altura)
    let situacao;

    switch (true) {
        case (imc <= 18.75):
            situacao = vetor[0]
            break;
        case (imc <= 24.9):
            situacao = vetor[1]
            break;
        case (imc <= 29.9):
            situacao = vetor[2]
            break;
        case (imc <= 34.9):
            situacao = vetor[3]
            break;
        case (imc <= 39.9):
            situacao = vetor[4]
            break;
        case (imc >= 40):
            situacao = vetor[5]
            break;
        default:
            break
    }


    res.innerHTML = `O seu IMC é ${imc.toFixed(2)} (${situacao}).`

    
}