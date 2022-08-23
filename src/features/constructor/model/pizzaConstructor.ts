import { createEvent, createStore, merge, sample } from 'effector';
import { $doughs, Dough } from '@entities/pizza/model/dough';
import { $sizes, Size } from '@entities/pizza/model/size';
import { $sauces, Sauce } from '@entities/pizza/model/sauce';
import { Ingredient, IngredientType } from '@entities/pizza/model/ingredient';
import { addedPizza } from '@entities/cart/model/cart';
import { Pizza } from '@entities/pizza/model/pizza';

type PizzaConstructorIngredients = Record<IngredientType, [number, Ingredient]>;

type IngredientsCount = Record<IngredientType, number>;

type PizzaConstructor = {
  dough: Dough | null;
  size: Size | null;
  sauce: Sauce | null;
  ingredients: PizzaConstructorIngredients | null;
  name: string;
  price: number;
};

export const addedIngredient = createEvent<Ingredient>();
export const removedIngredient = createEvent<Ingredient>();
export const chosenDough = createEvent<Dough>();
export const chosenSauce = createEvent<Sauce>();
export const chosenSize = createEvent<Size>();
export const changedName = createEvent<string>();

export const cookClicked = createEvent<Pizza>();

export const ingredientCountChanged = createEvent<{
  count: number;
  ingredient: Ingredient;
}>();
const hasBeenSetIngredientCount = createEvent<Ingredient[]>();

const calculatedPrice = createEvent<number>();
const ingredientsCountsCalculated = createEvent();

const updatedPizza = merge([
  addedIngredient,
  removedIngredient,
  hasBeenSetIngredientCount,
  chosenSize,
  chosenSauce,
  chosenDough,
]);

const MAX_INGREDIENTS = 3;
export const $constructorDough = createStore<Dough | null>(null).on(
  chosenDough,
  (_, newDough) => newDough,
);

export const $constructorSize = createStore<Size | null>(null).on(
  chosenSize,
  (_, size) => size,
);

export const $constructorSauce = createStore<Sauce | null>(null).on(
  chosenSauce,
  (_, sauce) => sauce,
);

export const $constructorName = createStore<string>('').on(
  changedName,
  (_, name) => name,
);

export const $constructorPrice = createStore<number>(0).on(
  calculatedPrice,
  (_, price) => price,
);

export const $constructorIngredients = createStore<Ingredient[]>([])
  .on(addedIngredient, (state, ingredient) => [...state, ingredient])
  .on(removedIngredient, (state, ingredient) => {
    const index = state.findIndex((ing) => ing.type === ingredient.type);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  })
  .on(hasBeenSetIngredientCount, (_, ingredients) => ingredients);

export const $constructorIngredientsCounts =
  createStore<IngredientsCount | null>(null).on(
    ingredientsCountsCalculated,
    (state, ingredients) => ingredients,
  );

sample({
  clock: $constructorIngredients.updates,
  fn: (ingredients) =>
    ingredients.reduce<IngredientsCount>((acc, ingredient) => {
      acc[ingredient.type] = acc[ingredient.type] + 1 || 1;
      return acc;
    }, {} as IngredientsCount),
  target: ingredientsCountsCalculated,
});

export const $canAddMore = $constructorIngredients.map(
  (ingredients) => ingredients.length < MAX_INGREDIENTS,
);

export const $ingredientsTypes = $constructorIngredients.map<IngredientType[]>(
  (ingredients) => ingredients.map((ingredient) => ingredient.type),
);

export const $isReady = createStore(false).on(
  $constructorPrice,
  (_, price) => price > 0,
);

sample({
  clock: ingredientCountChanged,
  source: {
    canAddMore: $canAddMore,
    constructorIngredients: $constructorIngredients,
    constructorIngredientsCounts: $constructorIngredientsCounts,
  },
  fn: ({ constructorIngredients, constructorIngredientsCounts }, payload) => {
    const currentCount = constructorIngredients.length;

    let newCount = 0;
    const maxAvailableCount =
      MAX_INGREDIENTS -
      currentCount +
      (constructorIngredientsCounts?.[payload.ingredient.type] || 0);

    if (payload.count > maxAvailableCount) {
      newCount = maxAvailableCount;
    } else if (payload.count > 0) {
      newCount = payload.count;
    }

    const newIngredients = constructorIngredients.filter(
      (i) => i.type !== payload.ingredient.type,
    );

    for (let i = 0; i < newCount; i++) {
      newIngredients.push(payload.ingredient);
    }

    return newIngredients;
  },
  target: hasBeenSetIngredientCount,
});

sample({
  clock: $doughs.updates,
  fn: (doughs) => doughs[0],
  target: chosenDough,
});

sample({
  clock: $sauces.updates,
  fn: (sauces) => sauces[0],
  target: chosenSauce,
});

sample({
  clock: $sizes.updates,
  fn: (sizes) => sizes[1],
  target: chosenSize,
});

sample({
  clock: updatedPizza,
  source: {
    dough: $constructorDough,
    sauce: $constructorSauce,
    size: $constructorSize,
    ingredients: $constructorIngredients,
  },
  fn: ({ dough, sauce, size, ingredients }) => {
    const ingredientsPrice = ingredients.reduce((acc, i) => acc + i.price, 0);
    const doughPrice = dough?.price || 0;
    const saucePrice = sauce?.price || 0;
    const sizeMultiplier = size?.multiplier || 0;

    return (ingredientsPrice + doughPrice + saucePrice) * sizeMultiplier;
  },
  target: calculatedPrice,
});
