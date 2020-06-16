// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "nome": "Enzo Azevedo Rodrigues",
            "titulo": "Meu filho tem intolerância à lactose",
            "mensagem": "Cara, é de boa. Eu tenho e é só tomar enzima. Não vivo sem uma vitamina haha."
        },
        {
            "nome": "Luiza Cavalcanti Castro",
            "titulo": "Quero virar vegetariana",
            "mensagem": "Coisa desnecessária esse povo que quer parar de comer carne!"
        },
        {
            "nome": "Luís Rodrigues Araujo",
            "titulo": "Descobri que tenho diabetes tipo 1",
            "mensagem": "É difícil controlar, mas voce se acostuma! A minha mãe também tem e está super bem hoje, mas tem que ter responsabilidade. Espero que dê tudo certo <3"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('comentariosFinal'));
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
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('comentariosFinal', JSON.stringify(db));
}

function updateContato(id, contato) {


    // Atualiza os dados no Local Storage
    localStorage.setItem('comentariosFinal', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('comentariosFinal', JSON.stringify(db));
}
var ul= document.getElementById("listaUtensilios");
var li;
var itemId;
var item;

addUtensilios = function(){
if(document.getElementById("utensilios").value !== ""){
	item = document.getElementById("utensilios");
	itemId = ul.childElementCount;
	li = createItemEl (item.value, itemId);
	li.appendChild(createRemoveUtensiliosBtn(itemId));
	ul.appendChild(li);
	item.value ="";
}

}

removeUtensilios = function(itemId){
	for(a=0 ; a < ul.children.length ; a++){
		if(ul.children[a].getAttribute("index") == itemId){
			ul.children[a].remove();
		}
	}
}

createItemEl = function(itemValue, itemId){
	let li = document.createElement("li");
	li.setAttribute("index", itemId);
	li.appendChild(document.createTextNode(itemValue));
	return li;
}
createRemoveUtensiliosBtn = function (itemId){ 
	let btn = document.createElement("button");
	btn.setAttribute("onclick","removeUtensilios("+itemId+")");
	btn.setAttribute("class", "btn_class");
	btn.innerHTML = "x";
	return btn;
}

function addLi()
{
    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

     liNode.appendChild(txtNode);
     listNode.appendChild(liNode);

}
