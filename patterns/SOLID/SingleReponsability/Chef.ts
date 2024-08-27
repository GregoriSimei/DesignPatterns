export interface Chef {
    prepareDessert(): void
    cookingMainCourse(): void
}   

export class Chef implements Chef {
    prepareDessert(): void {
        console.log("Doing the dessert...");
    }

    cookingMainCourse(): void {
        console.log("Making the main course...");
    }
}