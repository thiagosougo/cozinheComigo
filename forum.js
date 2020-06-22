// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "nome": "Leila Carvalho Lima",
            "titulo": "Quero virar vegetariana",
            "mensagem": "Ano retrasado eu fiquei uma semana sem comer carne, mas os meus pais não estavam colaborando. Agora estou morando sozinha e queria dicas de ingredientes que eu possa substituir pela carne. Me disseram que soja é uma boa!"
        },
        {
            "nome": "Estevan Oliveira Gomes",
            "titulo": "Meu filho tem intolerância à lactose",
            "mensagem": "Ele tem 8 anos e descobrimos depois que passou mal por causa de uma vitamina. Não sei o que fazer! :o #paiDesesperado"
        },
        {
            "nome": "Amanda Sousa Rodrigues",
            "titulo": "Descobri que tenho diabetes tipo 1",
            "mensagem": "Tenho 19 anos e nunca fui muito de doces, mas comia de vez em quando. Fui diagnosticada com diabetes tipo 1 anteontem. Alguém na mesma situação para trocar conhecimentos?"
        },
        {
            "nome": "Martim Goncalves Alves",
            "titulo": "Dicas de bolo para o aniversário do meu marido",
            "mensagem": "Ele é muito simpático, trabalhador e adora abacaxi."
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('forumFinalizado'));
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
    displayMessage("Mensagem postada com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('forumFinalizado', JSON.stringify(db));
}

function updateContato(id, contato) {


    // Atualiza os dados no Local Storage
    localStorage.setItem('forumFinalizado', JSON.stringify(db));
}
