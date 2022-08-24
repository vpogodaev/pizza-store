import { Pizza } from '@entities/pizza/model/pizza';
import { Misc, MiscType } from '@entities/product/model/misc';
import { combine, createEvent, createStore, merge, sample } from 'effector';
import { watch } from 'fs';

type PizzasCount = Record<string, number>;
type MiscCount = Record<MiscType, number>;

// Pizza
export const addedPizza = createEvent<Pizza>();
export const removedPizza = createEvent<Pizza>();

export const $pizzasProduct = createStore<Pizza[]>([])
  .on(addedPizza, (state, pizza) => [...state, pizza])
  .on(removedPizza, (state, pizza) => {
    const index = state.findIndex((p) => p.name === pizza.name);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  });

export const $pizzasProductsCount = $pizzasProduct.map<PizzasCount>(
  (pizzas) => {
    const pizzasCount: PizzasCount = {};
    pizzas.forEach((p) => {
      pizzasCount[p.name] = pizzasCount[p.name] + 1 || 1;
    });
    return pizzasCount;
  },
);

// TODO: remove
$pizzasProductsCount.watch((state) =>
  console.log('$pizzasProductsCount.watch', state),
);

// Misc
export const addedMisc = createEvent<Misc>();
export const removedMisc = createEvent<Misc>();

export const $miscListProduct = createStore<Misc[]>([])
  .on(addedMisc, (state, misc) => [...state, misc])
  .on(removedMisc, (state, misc) => {
    const index = state.findIndex((m) => m.type === misc.type);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  });

export const $miscProductsCount = $miscListProduct.map<MiscCount>(
  (miscList) => {
    const miscCount: MiscCount = {} as MiscCount;
    miscList.forEach(({ type }) => {
      miscCount[type] = miscCount[type] + 1 || 1;
    });
    return miscCount;
  },
);

$miscProductsCount.watch((state) =>
  console.log('$miscProductsCount.watch', state),
);

// Price
const calculatedPrice = createEvent<number>();

const priceChangeEvents = merge([
  addedPizza,
  removedPizza,
  addedMisc,
  removedMisc,
]);

export const $totalPrice = createStore<number>(0).on(
  calculatedPrice,
  (_, totalPrice) => totalPrice,
);

sample({
  clock: priceChangeEvents,
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

export const pizzaChangedClicked = createEvent<Pizza>();

sample({
  clock: pizzaChangedClicked,
  fn: (pizza) => pizza,

})
