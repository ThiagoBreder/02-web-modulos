import { carregar } from "../../../carregar.js";

function comportamentoDataNascimento(evento) {
  const input = evento.target;

  // Permitir apagar com as teclas Backspace e Delete.
  if (evento.key === 'Backspace' || evento.key === 'Delete') {
    return; // deixa seguir normalmente.
    // backspace ou delete n fazem o comportamento padrao do default do input form
    // 
  }

  // Impedir que sejam digitados mais de 10 caracteres (dd/mm/yyyy).
  if (input.value.length === 10) {
    evento.preventDefault(); // BLOQUEIA as teclas.
    return;
  }

  /* Verificar se a tecla pressionada está entre '0' e '9'.
     Bloquear se não for número.
  */
  if (evento.key < '0' || evento.key > '9') {
    evento.preventDefault(); // BLOQUEIA as teclas.
    return;
  }

  /* Quando o usuário digitar dois dígitos (dd), ou 
     dois mais dois (dd/mm), o código insere automaticamente
     a barra. Isso constrói a máscara da data conforme a 
     pessoa digita. Adiciona a barra automaticamente em dd/mm/yyyy.
  */
  if ((input.value.length === 2) || (input.value.length === 5)) {
    input.value += '/';
  }
}


// '===' -> 'identico': comparacao com valor e tipo


export async function componenteNascimento() {
  const formulario = document.querySelector('#formulario');
  await carregar('./js/componentes/corpo/formulario/nascimento/nascimento.html', formulario);

  const nascimento = formulario.querySelector('#nascimento');

  nascimento.addEventListener('keydown', (event) => comportamentoDataNascimento(event));
}