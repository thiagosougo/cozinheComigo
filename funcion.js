var ul = document.getElementById("listaUtensilios");
var li;
var itemId;
var item;
var objetoASerEnviado = {
    receitas: []
}


var listasReceitas = {
    utensilios: [],
    ingredientes: [],
    passos: [],
    dicas: []
}


function enviarReceita() {
    let receita = {

    }

    //Salvando primeira parte do formulario
    document.querySelectorAll('input.form-dados').forEach(function(elemento) {
        receita[elemento.id] = elemento.value
    })

    //Salvando select categorias
    receita.categoria = categorias.selectedOptions[0].text

    //salvando itens do li (listasReceitas)
    Object.assign(receita, listasReceitas)

    //obj pra enviar pro local storage
    objetoASerEnviado.receitas.push(receita)

    // transformando obj em string
    var jsonAux = JSON.stringify(objetoASerEnviado);

    //salvando objetoASerEnviado em localstorage
    window.localStorage.setItem('receitas', jsonAux);


    document.querySelectorAll('input.form-dados').forEach(function(elemento) {
        elemento.value = ""
    })

    listasReceitas = {
        utensilios: [],
        ingredientes: [],
        passos: [],
        dicas: []
    }

}



addUtensilios = function() {
    if (document.getElementById("utensilios").value !== "") {
        item = document.getElementById("utensilios");
        itemId = ul.childElementCount;
        listasReceitas.utensilios.push(item.value)
        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveUtensiliosBtn(itemId));
        ul.appendChild(li);
        item.value = "";
    }
}

removeUtensilios = function(itemId) {
    for (a = 0; a < ul.children.length; a++) {
        if (ul.children[a].getAttribute("index") == itemId) {
            ul.children[a].remove();
        }
    }
}

createItemEl = function(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveUtensiliosBtn = function(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeUtensilios(" + itemId + ")");
    btn.setAttribute("class", "btn_class");
    btn.innerHTML = "x";
    return btn;
}



/* INGREDIENTES */

var listan = document.getElementById("listaIngredientes");
var li;
var itemId;
var item;

addIngredientes = function() {
    if (document.getElementById("ingredientes").value !== "") {
        item = document.getElementById("ingredientes");
        itemId = listan.childElementCount;
        listasReceitas.ingredientes.push(item.value)
        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveIngredientesBtn(itemId));
        listan.appendChild(li);
        item.value = "";
    }
}
removeIngredientes = function(itemId) {
    for (i = 0; i < listan.children.length; i++) {
        if (listan.children[i].getAttribute("index") == itemId) {
            listan.children[i].remove();
        }
    }
}
createItemEl = function(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveIngredientesBtn = function(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeIngredientes(" + itemId + ")");
    btn.setAttribute("class", "btn_class");
    btn.innerHTML = "x";
    return btn;
}

/* PASSOA A PASSO */

var listab = document.getElementById("listaEtapas");
var li;
var itemId;
var item;

addEtapas = function() {
    if (document.getElementById("etapas").value !== "") {
        item = document.getElementById("etapas");
        itemId = listab.childElementCount;
        listasReceitas.passos.push(item.value)
        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveEtapasBtn(itemId));
        listab.appendChild(li);
        item.value = "";
    }
}

removeEtapas = function(itemId) {
    for (i = 0; i < listab.children.length; i++) {
        if (listab.children[i].getAttribute("index") == itemId) {
            listab.children[i].remove();
        }
    }
}

createItemEl = function(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveEtapasBtn = function(itemId) {
        let btn = document.createElement("button");
        btn.setAttribute("onclick", "removeEtapas(" + itemId + ")");
        btn.setAttribute("class", "btn_class");
        btn.innerHTML = "x";
        return btn;
    }
    /* FIM PASSO A PASSO */

/*9 INÍCIO  DICAS EXTRAS */

var listac = document.getElementById("listaDicas");
var li;
var itemId;
var item;

addDicas = function() {
    if (document.getElementById("dicas").value !== "") {
        item = document.getElementById("dicas");
        itemId = listac.childElementCount;
        listasReceitas.dicas.push(item.value)
        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveDicasBtn(itemId));
        listac.appendChild(li);
        item.value = "";
    }


}

removeDicas = function(itemId) {
    for (i = 0; i < listac.children.length; i++) {
        if (listac.children[i].getAttribute("index") == itemId) {
            listac.children[i].remove();
        }
    }
}

createItemEl = function(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}
createRemoveDicasBtn = function(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeDicas(" + itemId + ")");
    btn.setAttribute("class", "btn_class");
    btn.innerHTML = "x";
    return btn;
}

