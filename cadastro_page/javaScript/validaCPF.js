class ValidaCpf {
    constructor(cpfSujo) {
        this.cpfSujo = cpfSujo;
    }

    validaCPF() {
        const cpfLimpo = this.cpfSujo.replace(/\D+/g, '').split('').map(Number);
        if (cpfLimpo.length !== 11 || !this.vetorizaECalcula(cpfLimpo)) {
            return false; // CPF inválido
        }
        return true; // CPF válido
    }

    vetorizaECalcula(cpf) {
        const cpfReduzido = cpf.slice(0, 9); 
        const digitoOne = this.criaDigito([...cpfReduzido]);
        const digitoTwo = this.criaDigito([...cpfReduzido, digitoOne]);
        const resul = [...cpfReduzido, digitoOne, digitoTwo];

        return JSON.stringify(resul) == JSON.stringify(cpf)
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