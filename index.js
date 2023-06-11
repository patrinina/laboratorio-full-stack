const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const INPUT_TYPES = {
	NAME: 'nombre',
    PRIMERAPELLIDO: 'primerapellido',
    SEGUNDOAPELLIDO: 'segundoapellido',
	EMAIL: 'email',
    LOGIN: 'login',
	PASSWORD: 'password',
}

const FORM_INFO = {
	nombre: {
		expresion: /^[a-zA-ZÀ-ÿ\s]+$/,
		error: 'Sólo puede contener letras y espacios.'
	},
    primerapellido: {
		expresion: /^[a-zA-ZÀ-ÿ\s]+$/,
		error: 'Sólo puede contener letras y espacios.'
	},
    segundoapellido: {
		expresion: /^[a-zA-ZÀ-ÿ\s]+$/,
		error: 'Sólo puede contener letras y espacios.'
	},
	email: {
		expresion:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		error: 'Email inválido'
	},
    login: {
		expresion: /^[a-zA-Z0-9]+$/,
		error: 'Sólo puede contener números y letras.'
	},
	password: {
		expresion: /^.{4,8}$/,
		error: 'Debe tener entre 4 y 8 caracteres.'
	},
}

const handleInput = (e) => {
	switch (e.target.name) {
		case INPUT_TYPES.NAME:
			validarCampo(FORM_INFO[INPUT_TYPES.NAME].expresion, e.target, INPUT_TYPES.NAME);
		break;
        case INPUT_TYPES.PRIMERAPELLIDO:
			validarCampo(FORM_INFO[INPUT_TYPES.PRIMERAPELLIDO].expresion, e.target, INPUT_TYPES.PRIMERAPELLIDO);
		break;
        case INPUT_TYPES.SEGUNDOAPELLIDO:
			validarCampo(FORM_INFO[INPUT_TYPES.SEGUNDOAPELLIDO].expresion, e.target, INPUT_TYPES.SEGUNDOAPELLIDO);
		break;
		case INPUT_TYPES.EMAIL:
			validarCampo(FORM_INFO[INPUT_TYPES.EMAIL].expresion, e.target, INPUT_TYPES.EMAIL);
		break;case INPUT_TYPES.SEGUNDOAPELLIDO:
			validarCampo(FORM_INFO[INPUT_TYPES.SEGUNDOAPELLIDO].expresion, e.target, INPUT_TYPES.SEGUNDOAPELLIDO);
		break;
        case INPUT_TYPES.LOGIN:
			validarCampo(FORM_INFO[INPUT_TYPES.LOGIN].expresion, e.target, INPUT_TYPES.LOGIN);
		break;
		case INPUT_TYPES.PASSWORD:
			validarCampo(FORM_INFO[INPUT_TYPES.PASSWORD].expresion, e.target, INPUT_TYPES.PASSWORD);
		break;
	}
}

const showErrorField = (campo) => {
	document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
	document.querySelector(`#grupo__${campo} .formulario__image`).src = './images/error-icon.svg';
	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
	document.querySelector(`#grupo__${campo} .formulario__input-error`).innerHTML = FORM_INFO[campo].error;
	document.querySelector(`#grupo__${campo} .formulario__input-error`).style.display = 'block';
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__image`).src = './images/success-icon.svg';
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');		
		document.querySelector(`#grupo__${campo} .formulario__input-error`).style.display = 'none';
	} else {
		showErrorField(campo)
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', handleInput);
	input.addEventListener('blur', handleInput);
});




