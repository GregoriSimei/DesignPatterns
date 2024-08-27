import { Chef } from "./Chef";
import { Cleaner } from "./Cleaner";
import { Waiter } from "./Waiter";

class Restaurant {
    constructor(
        protected chef: Chef = new Chef(),
        protected waiter: Waiter = new Waiter(),
        protected cleaner: Cleaner= new Cleaner()
    ) {}
  
    start() {
      this.waiter.organizeTables();
      this.chef.cookingMainCourse();
      this.waiter.takeOrder();
      this.cleaner.clean();
      this.chef.prepareDessert();
      this.waiter.serveDrinks();
    }
}
  
  const restaurant = new Restaurant();
  restaurant.start();