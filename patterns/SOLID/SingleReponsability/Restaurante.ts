class Restaurante {
    constructor() {}
  
    iniciar() {
      this.organizarMesas();
      this.cozinharPratoPrincipal();
      this.anotarPedido();
      this.limpar();
      this.prepararSobremesa();
      this.servirBebidas();
    }
  
    organizarMesas() {
      console.log("Organizando as mesas...");
    }
    cozinharPratoPrincipal() {
      console.log("Preparando o prato principal");
    }
    anotarPedido() {
      console.log("Anotando o pedido...");
    }
    limpar() {
      console.log("Limpando o local...");
    }
    prepararSobremesa() {
      console.log("Fazendo as sobremesas...");
    }
    servirBebidas() {
      console.log("Servindo as bebidas...");
    }
  }
  
  const restaurante = new Restaurante();
  restaurante.iniciar();