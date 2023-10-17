class ValidaFormulario {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.event();
    }

    event() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const checkFields = this.checkFields();
        const checkPasswords = this.checkPasswords();

        if (checkFields || checkPasswords) {
            alert('form submited');
            this.form.submit()
        }
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for (let input of this.form.querySelectorAll('input')) {
            const label = input.previousElementSibling.innerText;
            if (!input.value) {
                this.errorCreate(input, `O ${label} must to preenchidos`)
                valid = false;
            }
            if (input.classList.contains('nome')) {
                if (!this.nome(input)) valid = false;
            }
            if (input.classList.contains('sobrenome')) {
                if (!this.sobrenome(input)) valid = false;
            }
            if (input.classList.contains('cpf')) {
                if (!this.cpf(input)) valid = false;
            }
            if (input.classList.contains('usuario')) {
                if (!this.usuario(input)) valid = false;
            }
        }

        return valid
    }
    usuario(input) {
        let valid = true;
        const usuario = input.value;

        if (!usuario.match(/^[a-zA-z0-9]+$/g)) {
            this.errorCreate(input, 'O campo só pode ter números e/ou letras'); 
            valid = false;
        }
        return valid
    }
    cpf(input) {
        let valid = true;
        const cpf = new ValidaCpf(input.value);

        if (!cpf.validaCPF()) {
            this.errorCreate(input, 'Digíte um cpf válido');
            valid = false;
        }
        return valid
    }

    sobrenome(input) {
        let valid = true;
        const sobrenome = input.value;

        if (!sobrenome.match(/^[a-zA-z]+$/g)) {
            this.errorCreate(input, `Esse campo só pode ter letras`);
            valid = false;
        }
        return valid
    }

    nome(input) {
        let valid = true;
        const nome = input.value;

        if (!nome.match(/^[a-zA-z]+$/g)) {
            this.errorCreate(input, `Esse campo só pode ter letras`)
            valid = false;
        }
        return valid
    }  
    
    checkPasswords() {
        let valid = true;

        const senha = this.form.querySelector('.senha');
        const repSenha = this.form.querySelector('.repSenha');
        
        if (senha.value !== repSenha.value) {
            this.errorCreate(repSenha, 'Os campos da senha precisam ser iguais')
            valid = false;
        }
        if (senha.value.length < 3 || senha.value.length > 12) {
            this.errorCreate(senha, 'O campo senha precisa ter entre 3 e 12 caracteres')
            valid = false;
        }
        return valid
    }
    errorCreate(input, msg) {
        const p = document.createElement('p');
        p.innerText = msg;
        p.style.color = 'red';
        p.classList.add('error-text');
        input.insertAdjacentElement('afterend', p);
    }
}
const formulario = new ValidaFormulario();