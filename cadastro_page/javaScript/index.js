class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.checkFields();
        const senhasValidas = this.senhasValidas();

        if(checkFields && senhasValidas) {
            alert(`form enviado`);
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repSenha = this.formulario.querySelector('.repSenha');
        
        if (senha.value.length < 3 || senha.value.length > 12) {
            this.errorCreate(repSenha, `A senha precisa ter entre 3 e 12 caracteres`);
            valid = false
        }
        if (senha.value!== repSenha.value) {
            this.errorCreate(repSenha, `Campos senha e repetir senha precisam ser iguais`);
            valid = false
        }

        return valid
    }

    checkFields() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let input of this.formulario.querySelectorAll('input')) {
            const label = input.previousElementSibling.innerText;
            if (!input.value) {
                this.errorCreate(input, `O campo ${label} não pode está em branco`);
                valid = false;
            }

            if (input.classList.contains('cpf')) {
                if (!this.validaCPF(input)) valid = false;
            }
            if (input.classList.contains('usuario')) {
                if (!this.validaUsuario(input)) valid = false;
            }
        }
        return valid
    }

    validaUsuario(input) {
        const usuario = input.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.errorCreate(input, 'Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if (!usuario.match(/^[a-zA-z0-9]+$/g)) {
            this.errorCreate(input, 'Nome de usuario precisa conter apenas letras e/ou numeros');
            valid = false;
        }

        return valid;
    }

    validaCPF(input) {
        const cpf = new ValidaCpf(input.value);
        if (!cpf.validaCPF()) {
            this.errorCreate(input, 'CPF inválido');
            return false
        } else {
            return true
        }
    }

    errorCreate(input, msg) {
        const p = document.createElement('p');
        p.innerText = msg;
        p.style.fontSize = '10pt';
        p.style.color = 'red';
        p.classList.add('error-text');
        input.insertAdjacentElement('afterend', p)
    }

}

const valida = new ValidaFormulario();