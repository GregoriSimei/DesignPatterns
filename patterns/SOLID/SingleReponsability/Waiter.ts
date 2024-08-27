export interface Waiter {
    takeOrder(): void
    organizeTables(): void
    serveDrinks(): void
}

export class Waiter implements Waiter {
    takeOrder(): void {
        console.log("Taking the order...");
    }

    organizeTables(): void {
        console.log("Organizing the tables...");
    }

    serveDrinks(): void {
        console.log("Serving drinks...");
    }
}