import { getIngredients } from '@shared/api/modules/ingredients';
import { createEffect, createEvent, createStore, sample } from 'effector';

export type IngredientType =
  | 'ananas'
  | 'bacon'
  | 'blue_cheese'
  | 'cheddar'
  | 'chile'
  | 'ham'
  | 'jalapeno'
  | 'mozzarella'
  | 'mushrooms'
  | 'olives'
  | 'onion'
  | 'parmesan'
  | 'salami'
  | 'salmon'
  | 'tomatoes';

export type Ingredient = {
  id: number;
  name: string;
  price: number;
  type: IngredientType;
};

const getIngredientsFx = createEffect(async () => await getIngredients());
export const readyToLoadIngredients = createEvent();

export const $ingredients = createStore<Ingredient[]>([]).on(
  getIngredientsFx.doneData,
  (_, ingredients) => ingredients,
);

sample({ clock: readyToLoadIngredients, target: getIngredientsFx });
