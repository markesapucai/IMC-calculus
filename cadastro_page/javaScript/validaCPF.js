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