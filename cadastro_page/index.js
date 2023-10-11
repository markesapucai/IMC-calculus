class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.cpfBox = document.querySelector('.ipn-cpf').value;
        this.p = document.createElement('p');
        this.event();
    }
    
    event() {
        const enviar = document.querySelector('.enviar');
        enviar.addEventListener('click', e => {
            e.preventDefault();
            let formValido = true;
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    formValido = false
                }
            })
            if (formValido) {
                this.p.innerText = '';
                this.start();
            } else {
                this.criaErroVazio()
            }

        })
    }

    criaErroVazio() {
        this.p.innerText = '*preencha todos os campos';
        this.p.style.color = 'red'
        this.formulario.appendChild(this.p)
    }

    start() {
        const cpf = new ValidaCpf(this.cpfBox);
        cpf;
    }
}
//Formatar esse valida para retuornar um valor true 
class ValidaCpf extends ValidaFormulario {}

class ValidaCpf {
    constructor(cpfSujo) {
        this.cpfSujo = cpfSujo;
    }

    set valida(valor) {
        const cpfLimpo = valor.replace(/\D+/g, '').split('').map(Number);
        this.verifica(cpfLimpo);
    }

    get valida() {
        return this.cpfSujo;
    }

    verifica(cpfLimpo) {
        if (typeof cpfLimpo !== 'object' || cpfLimpo.length !== 11) {
            console.log('CPF inválido, digite corretamente');
            return;
        }
        this.vetorizaECalcula(cpfLimpo);
    }

    vetorizaECalcula(cpf) {
        const cpfReduzido = cpf.slice(0, 9); 
        const digitoOne = this.criaDigito([...cpfReduzido]);
        const digitoTwo = this.criaDigito([...cpfReduzido, digitoOne]);

        const resul = [...cpfReduzido, digitoOne, digitoTwo];
        if (JSON.stringify(resul) == JSON.stringify(cpf)) {
            console.log('CPF válido');
        } else {
            console.log('CPF Inválido');
        }
    }

    criaDigito(cpf) {
        let cont = cpf.length + 1;
        const digit = cpf.reduce((acu, val) => {
            acu += val * cont;
            cont--;
            return acu;
        }, 0);
        let resul = 11 - (digit % 11);
        if (resul > 9) {
            resul = 0;
        }
        return resul;
    }
}


const valida = new ValidaFormulario();
/*
verificar se os campos n estão vazios
nome e sobrenome só podem ter letras
cpf tem que ser válido e ter o tamanho certo
usuarios só letras ou numeros de 3 a 12 caracteeres
senha de 6 a 12 caracteres
as senhas precisam bater
gerar erro se esses campos não forem preenchidos




*/