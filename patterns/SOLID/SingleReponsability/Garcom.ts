export interface Garcom {
    anotarPedido(): void
    organizarMesas(): void
    servirBebidas(): void
}

export class Garcom implements Garcom {
    anotarPedido(): void {
        console.log("Anotando o pedido...");
    }

    organizarMesas(): void {
        console.log("Organizando as mesas...");
    }

    servirBebidas(): void {
        console.log("Servindo as bebidas...");
    }
}