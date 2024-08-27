export interface Cleaner {
    clean(): void
}

export class Cleaner implements Cleaner {
    clean(): void {
        console.log("Cleaning the place...");
    }
}