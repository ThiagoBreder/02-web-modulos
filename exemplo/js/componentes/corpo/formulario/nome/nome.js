import { carregar } from "../../../carregar.js";

function validarCampoNome(nome) {
    let mensagem = document.querySelector('#mensagemErroNome');

    if (nome != '') {
        // trim-tira espaço em branco do inicio e do final dos campos
        if (nome.value.trim().length < 2) {
            nome.classList.add('invalido');//adicionar classe -> pode ser add elemento mas n compensa, tem q criar await, etc
            mensagem.innerHTML = "Nome inválido.";
        } else {
            nome.classList.remove('invalido'); //inserir classe
            mensagem.innerHTML = "";
        }
    }
    else {
        nome.classList.add('invalido');
        mensagem.innerHTML = "Campo vazio!";
    }
}

export async function componenteNome() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);

    const nome = formulario.querySelector('#nome');

    nome.addEventListener('blur', (event) => validarCampoNome(event.target));
}
