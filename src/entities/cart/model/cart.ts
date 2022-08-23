import { Pizza } from '@entities/pizza/model/pizza';
import { Misc } from '@entities/product/model/misc';
import { combine, createEvent, createStore, sample } from 'effector';

type Cart = {
  pizzas: Pizza[];
  miscList: Misc[];
  totalPrice: number;
};

export const addedPizza = createEvent<Pizza>();
export const addedMisc = createEvent<Misc>();
const calculatedPrice = createEvent<number>();

const $pizzasProduct = createStore<Pizza[]>([]).on(
  addedPizza,
  (state, pizza) => [...state, pizza],
);

const $miscListProduct = createStore<Misc[]>([]).on(
  addedMisc,
  (state, misc) => [...state, misc],
);

const $totalPrice = createStore<number>(0).on(
  calculatedPrice,
  (_, totalPrice) => totalPrice,
);

const $cart = combine({
  pizzas: $pizzasProduct,
  miscList: $miscListProduct,
  totalPrice: $totalPrice,
});

sample({
  clock: [addedPizza, addedMisc],
  source: {
    pizzas: $pizzasProduct,
    miscList: $miscListProduct,
  },
  fn: ({ pizzas, miscList }) => {
    const pizzaPrice = pizzas.reduce((acc, pizza) => acc + pizza.price, 0);
    const miscPrice = miscList.reduce((acc, misc) => acc + misc.price, 0);

    return pizzaPrice + miscPrice;
  },
  target: calculatedPrice,
});
