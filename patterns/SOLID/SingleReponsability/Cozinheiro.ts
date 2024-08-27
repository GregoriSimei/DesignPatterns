export interface Cozinheiro {
    prepararSobremesa(): void
    cozinharPratoPrincipal(): void
}

export class Cozinheiro implements Cozinheiro {
    prepararSobremesa(): void {
        console.log("Fazendo as sobremesas...");
    }

    cozinharPratoPrincipal(): void {
        console.log("Preparando o prato principal");
    }
}