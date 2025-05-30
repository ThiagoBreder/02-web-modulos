export async function carregar(caminhoDoComponente, elementoPai) {
  const resposta = await fetch(caminhoDoComponente);
  const htmlDoComponente = await resposta.text();

  // so vai isnerir se o elem existir -> msm coisa q o inner.html
  // onde vai ser inserido ('beforend') e oq vai ser inserido (htmlDoComponente)
  // o inner.html n tem garantia q o lugar q vc vai inserir existe -> da erro
  // vai criando em baixo e empurrando pra cima os componentes
  elementoPai.insertAdjacentHTML('beforeend', htmlDoComponente);
}

/*
=> insertAdjacentHTML(posicao, html):
   * Insere html no DOM na posição informada, sem substituir o conteúdo original.

=> As 4 posições possíveis:
   * "beforebegin": antes do próprio elemento.
   * "afterbegin": logo após a abertura da tag do elemento (como primeiro filho).
   * "beforeend": logo antes do fechamento da tag do elemento (como último filho).0
   * "afterend": depois do próprio elemento.
*/