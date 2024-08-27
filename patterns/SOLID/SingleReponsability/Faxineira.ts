export interface Faxineira {
    limpar(): void
}

export class Faxineira implements Faxineira {
    limpar(): void {
        console.log("Limpando o local...");
    }
}