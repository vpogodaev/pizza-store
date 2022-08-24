import { Ingredient, IngredientType } from '@entities/pizza/model/ingredient';

const ingredientIdsToType: Record<number, IngredientType> = {
  1: 'mushrooms',
  2: 'cheddar',
  3: 'tomatoes',
  4: 'salmon',
  5: 'salami',
  6: 'ham',
  7: 'ananas',
  8: 'bacon',
  9: 'mozzarella',
  10: 'onion',
  11: 'chile',
  12: 'olives',
  13: 'jalapeno',
  14: 'parmesan',
  15: 'blue_cheese',
};

export interface ResponseIngredient {
  id: number;
  name: string;
  image: string;
  price: number;
}
export const mapResponseIngredientToEntity = ({
  id,
  name,
  price,
}: ResponseIngredient): Ingredient | null => {
  const type = ingredientIdsToType[id];

  if (!type) {
    return null;
  }

  return {
    id,
    name,
    price,
    type,
  };
};
