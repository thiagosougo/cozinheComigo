// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "nome": "Iolanda Maria de Almeida",
            "titulo": "Macarrão",
            "mensagem": "Descobri que fazer um macarrão é mais fácil do que pensei, adorei o passo a passo da receita <3."
        },
        {
            "nome": "Bruno Alves Caetano",
            "titulo": "Fricassê de frango",
            "mensagem": "Fiz esse prato para minha família e eles adoraram. Coloquei um pouco de mussarela e ficou melhor ainda "
        },
        {
            "nome": "João Carlos Silva",
            "titulo": "Macarrão à bolonhesa",
            "mensagem": "Cheguei morrendo de fome e rapidinho fiz esse macarrão. Esse app está salvando !!!"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('comentFinal'));
if (!db) {
    db = db_contatos_inicial
};
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoContato = {
        "nome": contato.nome,
        "titulo": contato.titulo,
        "mensagem": contato.mensagem
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Comentário enviado");

    // Atualiza os dados no Local Storage
    localStorage.setItem('comentFinal', JSON.stringify(db));
}

function updateContato(id, contato) {


    // Atualiza os dados no Local Storage
    localStorage.setItem('comentFinal', JSON.stringify(db));
}

