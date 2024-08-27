import { Cozinheiro } from "./Cozinheiro";
import { Faxineira } from "./Faxineira";
import { Garcom } from "./Garcom";

class Restaurante {
    constructor(
        protected cozinheiro: Cozinheiro = new Cozinheiro(),
        protected garcom: Garcom = new Garcom(),
        protected faxineira: Faxineira = new Faxineira()
    ) {}
  
    iniciar() {
      this.garcom.organizarMesas();
      this.cozinheiro.cozinharPratoPrincipal();
      this.garcom.anotarPedido();
      this.faxineira.limpar();
      this.cozinheiro.prepararSobremesa();
      this.garcom.servirBebidas();
    }
}
  
  const restaurante = new Restaurante();
  restaurante.iniciar();