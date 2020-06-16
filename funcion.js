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



 /* INGREDIENTES */
	
 var listan= document.getElementById("listaIngredientes");
 var li;
 var itemId;
 var item;

	addIngredientes = function(){
	if(document.getElementById("ingredientes").value !== ""){
		item = document.getElementById("ingredientes");
		itemId = listan.childElementCount;
		li = createItemEl (item.value, itemId);
		li.appendChild(createRemoveIngredientesBtn(itemId));
		listan.appendChild(li);
		item.value ="";
		}
	}
	removeIngredientes = function(itemId){
		for(i=0 ; i < listan.children.length ; i++){
			if(listan.children[i].getAttribute("index") == itemId){
				listan.children[i].remove();
			}
		}
	}
	createItemEl = function(itemValue, itemId){
		let li = document.createElement("li");
		li.setAttribute("index", itemId);
		li.appendChild(document.createTextNode(itemValue));
		return li;
	}
	createRemoveIngredientesBtn = function (itemId){ 
		let btn = document.createElement("button");
		btn.setAttribute("onclick","removeIngredientes("+itemId+")");
		btn.setAttribute("class", "btn_class");
		btn.innerHTML = "x";
		return btn;
	}

	/* PASSOA A PASSO */
	
	var listab= document.getElementById("listaEtapas");
	var li;
	var itemId;
	var item;
   
	addEtapas = function(){
	   	if(document.getElementById("etapas").value !== ""){
		   item = document.getElementById("etapas");
		   itemId = listab.childElementCount;
		   li = createItemEl (item.value, itemId);
		   li.appendChild(createRemoveEtapasBtn(itemId));
		   listab.appendChild(li);
		   item.value ="";
	  	} 
	}
	   
	removeEtapas = function(itemId){
			for(i=0 ; i < listab.children.length ; i++){
				if(listab.children[i].getAttribute("index") == itemId){
				listab.children[i].remove();
			   }
		   }
	   }
	   
	   createItemEl = function(itemValue, itemId){
		   let li = document.createElement("li");
		   li.setAttribute("index", itemId);
		   li.appendChild(document.createTextNode(itemValue));
		   return li;
	   }
	   createRemoveEtapasBtn = function (itemId){ 
		   let btn = document.createElement("button");
		   btn.setAttribute("onclick","removeEtapas("+itemId+")");
		   btn.setAttribute("class", "btn_class");
		   btn.innerHTML = "x";
		   return btn;
	   }
	/* FIM PASSO A PASSO */

   /*9 INÍCIO  DICAS EXTRAS */
	
	var listac= document.getElementById("listaDicas");
	var li;
	var itemId;
	var item;
   
	addDicas = function(){
	   if(document.getElementById("dicas").value !== ""){
		   item = document.getElementById("dicas");
		   itemId = listac.childElementCount;
		   li = createItemEl (item.value, itemId);
		   li.appendChild(createRemoveDicasBtn(itemId));
		   listac.appendChild(li);
		   item.value ="";
	   }
	   
	   
	   }
	   
	removeDicas = function(itemId){
	   for(i=0 ; i < listac.children.length ; i++){
		   if(listac.children[i].getAttribute("index") == itemId){
			   listac.children[i].remove();
			   }
		   }
	   }
	   
	   createItemEl = function(itemValue, itemId){
		   let li = document.createElement("li");
		   li.setAttribute("index", itemId);
		   li.appendChild(document.createTextNode(itemValue));
		   return li;
	   }
	   createRemoveDicasBtn = function (itemId){ 
		   let btn = document.createElement("button");
		   btn.setAttribute("onclick","removeDicas("+itemId+")");
		   btn.setAttribute("class", "btn_class");
		   btn.innerHTML = "x";
		   return btn;
	   }

	   /* Ler dados */
	   function cadastraReceita(){
		   var receitaTitulo = document.getElementById("campoTitulo");
		   var receitaDescricao = document.getElementById("campoDescricao");
		   
		   var dados = JSON.parse(localStorage.getItem("dadosReceita"));

		   if(dados == null){
			   localStorage.setItem("dadosReceita", "[]");
			   dados = [];
		   }
		   var auxRegistro = {
			   titulo: campoTitulo.value,
			   descricao: campoDescricao.value
		   }

		   dados.push(auxRegistro);

		   localStorage.setItem("dadosReceita", JSON.stringify(dados));
		   alert("Receita cadastrada com sucesso!")

		   receitaTitulo.value = "";
		   receitaDescricao.value = "";

	   }

	