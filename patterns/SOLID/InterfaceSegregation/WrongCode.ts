
interface ChefWrong {
    maketheMainCourse(): string;
    makeDessert(): string;
}
  
class MasterChefWrong implements ChefWrong {
    maketheMainCourse(): string {
        return "Salmão grelhado ao molho de limão siciliano com risoto de ervas frescas";
    }
    makeDessert(): string {
        return "Tiramisù de frutas vermelhas com calda de framboesa";
    }
}
class DessertChefWrong implements ChefWrong {
    maketheMainCourse(): string {
        throw new Error("Faço apenas pratos doces");
    }
    makeDessert(): string {
        return "Taça de morangos com chantilly e crocante de amêndoas";
    }
}