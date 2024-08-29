
interface FoodCook {
    maketheMainCourse(): string
}

interface DessertCook {
    makeDessert(): string
}
  
class MasterChef implements FoodCook, DessertCook {
    maketheMainCourse(): string {
        return "Grilled salmon in Sicilian lemon sauce with fresh herb risotto";
    }
    makeDessert(): string {
        return "Red fruit tiramisu with raspberry sauce";
    }
}
class DessertChef implements DessertCook {
    makeDessert(): string {
        return "Bowl of strawberries with whipped cream and almond crunch";
    }
}