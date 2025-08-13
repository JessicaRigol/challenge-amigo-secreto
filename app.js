// Array para guardar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if(nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    input.focus();

    atualizarLista();
}


// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let i = 0;
    while(i < amigos.length) {
        const nome = amigos[i];

        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);

        i++;
    }

}

// Função para sortear os amigos
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('Nenhum amigo diponivel para o sorteio.');
        return;
    }

    const indicaAleatorio = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indicaAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;

}


