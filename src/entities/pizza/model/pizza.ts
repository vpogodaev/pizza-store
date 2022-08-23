import { Ingredient } from '@entities/pizza/model/ingredient';
import { Dough } from '@entities/pizza/model/dough';
import { Sauce } from '@entities/pizza/model/sauce';
import { Size } from '@entities/pizza/model/size';

export type Pizza = {
  name: string;
  dough: Dough;
  sauce: Sauce;
  size: Size;
  ingredients: Ingredient[];
  price: number;
};

const getPizzaPrice = ({ dough, sauce, size, ingredients }: Pizza) => {
  const ingredientsPrice = ingredients.reduce((pv, cv) => pv + cv.price, 0);
  return (ingredientsPrice + sauce.price + dough.price) * size.multiplier;
};
//
// const pizzaCooked = createEvent<Pizza>()
//
// const $pizza = createStore(null).on(pizzaCooked, (_, newPizza) => newPizza);
