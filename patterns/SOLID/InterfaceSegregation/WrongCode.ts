
interface ChefWrong {
    maketheMainCourse(): string;
    makeDessert(): string;
}
  
class MasterChefWrong implements ChefWrong {
    maketheMainCourse(): string {
        return "Grilled salmon in Sicilian lemon sauce with fresh herb risotto";
    }
    makeDessert(): string {
        return "Red fruit tiramisu with raspberry sauce";
    }
}
class DessertChefWrong implements ChefWrong {
    maketheMainCourse(): string {
        throw new Error("I only make sweet dishes");
    }
    makeDessert(): string {
        return "Bowl of strawberries with whipped cream and almond crunch";
    }
}