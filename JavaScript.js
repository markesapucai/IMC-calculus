const vetor = []

const calcular = () => {
    let peso = parseFloat(document.querySelector('#pesoBox').value)
    let altura = parseFloat(document.querySelector('#alturaBox').value)
    let res = document.querySelector('.res')

    const calculo = (a, b) => a / Math.pow(b, 2)
    res.innerHTML = `O seu IMC é ${calculo(peso, altura)}`
}