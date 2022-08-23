import { createEvent, createStore, sample } from 'effector';
import { $doughs, Dough } from '@entities/pizza/model/dough';
import { Size } from '@entities/pizza/model/size';
import { Sauce } from '@entities/pizza/model/sauce';
import { Ingredient } from '@entities/pizza/model/ingredient';

type PizzaConstructor = {
  dough?: Dough;
  size?: Size;
  sauce?: Sauce;
  ingredients?: Ingredient[];
  name?: string;
};

export const chosenDough = createEvent<Dough>();
export const $pizzaConstructor = createStore<PizzaConstructor>({}).on(
  chosenDough,
  (state, newDough) => ({
    ...state,
    dough: newDough,
  }),
);

$pizzaConstructor.watch((state) => {
  console.log('$pizzaConstructor.watch state', state);
});

sample({
  clock: $doughs.updates,
  fn: (doughs) => doughs[0],
  target: chosenDough,
});