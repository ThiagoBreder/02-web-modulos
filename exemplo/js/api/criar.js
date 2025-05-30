export async function enviarDados(dados) {
    const url = "https://cc154a01-8055-496c-93dd-0c55cebf42a2-00-21gvya8tik3yp.picard.replit.dev/";
    const urlUsuarios = url + "usuarios";

    try {
        const resposta = await fetch(urlUsuarios, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error('Erro no envio dos dados!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao enviar dados:', erro);
        throw erro;
    }
}

export function imprimeObjetoJson(objetoJson){
  return `<div>ID: ${objetoJson.id}</div> 
          <div>Nome: ${objetoJson.nome}</div> 
          <div>Nascimento: ${objetoJson.nascimento}</div>
          <div>E-mail: ${objetoJson.email}</div>`;
}
