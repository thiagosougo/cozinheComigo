class Contador {

    constructor(dados) {
      this.id = dados.id;
      this.valor = dados.valor;
      this.incremento = dados.onIncremento;
      this.decremento = dados.onDecremento;
      this.exclusao = dados.onExclusao;
    }  
    getElement() {
        let contador = document.createElement('p');
        contador.setAttribute('class', 'contador');
        contador.setAttribute('data-numero', this.id);
        contador.innerHTML = `
        `;
        contador.querySelector('.incremento').onclick = () => this.incremento(this.id);
        contador.querySelector('.decremento').onclick = () => this.decremento(this.id);
        contador.querySelector('.exclusao').onclick = () => this.exclusao(this.id);
        
        return contador;
      }
    }
