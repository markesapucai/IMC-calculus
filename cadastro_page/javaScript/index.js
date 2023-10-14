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
    }

    checkFields() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let input of this.formulario.querySelectorAll('input')) {
            const label = input.previousElementSibling.innerText;
            if (!input.value) this.errorCreate(input, `O campo ${label} não pode está em branco`);
            valid = false
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