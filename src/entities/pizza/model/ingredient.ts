import { getIngredients } from '@shared/api/modules/ingredients';
import {
  mapResponseIngredientToEntity,
  ResponseIngredient,
} from '@shared/api/modules/ingredients/mappers';
import { createEffect, createStore, forward } from 'effector';
import { createGate } from 'effector-react';

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

const getIngredientsFx = createEffect(
  async () =>
    await getIngredients().then((r) => {
      const result: Ingredient[] = [];
      r.data.forEach((ingredient: ResponseIngredient) => {
        const mapped = mapResponseIngredientToEntity(ingredient);
        if (mapped) {
          result.push(mapped);
        }
      });
      return result;
    }),
);
export const $ingredients = createStore<Ingredient[]>([]).on(
  getIngredientsFx.doneData,
  (_, ingredients) => ingredients,
);

export const IngredientsGate = createGate();

forward({ from: IngredientsGate.state, to: getIngredientsFx });
