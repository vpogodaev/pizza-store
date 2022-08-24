import { combine, createEvent, createStore, merge, sample } from 'effector';
import { $doughs, Dough } from '@entities/pizza/model/dough';
import { $sizes, Size } from '@entities/pizza/model/size';
import { $sauces, Sauce } from '@entities/pizza/model/sauce';
import { Ingredient, IngredientType } from '@entities/pizza/model/ingredient';
import { addedPizza } from '@entities/cart/model/cart';
import { Pizza } from '@entities/pizza/model/pizza';

// Ingredients
const MAX_INGREDIENTS = 3;

type IngredientsCount = Record<IngredientType, number>;

export const addedIngredient = createEvent<Ingredient>();
export const removedIngredient = createEvent<Ingredient>();
export const ingredientCountChanged = createEvent<{
  count: number;
  ingredient: Ingredient;
}>();
const hasBeenSetIngredientCount = createEvent<Ingredient[]>();
const ingredientsCountsCalculated = createEvent();

export const $constructorIngredients = createStore<Ingredient[]>([])
  .on(addedIngredient, (state, ingredient) => [...state, ingredient])
  .on(removedIngredient, (state, ingredient) => {
    const index = state.findIndex((ing) => ing.type === ingredient.type);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  })
  .on(hasBeenSetIngredientCount, (_, ingredients) => ingredients)
  .on(addedPizza, () => []);

export const $constructorIngredientsCounts =
  createStore<IngredientsCount | null>(null).on(
    ingredientsCountsCalculated,
    (state, ingredients) => ingredients,
  );

export const $canAddMore = $constructorIngredients.map(
  (ingredients) => ingredients.length < MAX_INGREDIENTS,
);

export const $ingredientsTypes = $constructorIngredients.map<IngredientType[]>(
  (ingredients) => ingredients.map((ingredient) => ingredient.type),
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

// Dough
export const chosenDough = createEvent<Dough>();

export const $constructorDough = createStore<Dough | null>(null)
  .on(chosenDough, (_, newDough) => newDough)
  .on(addedPizza, () => null);

sample({
  clock: $doughs.updates,
  fn: (doughs) => doughs[0],
  target: chosenDough,
});

// Sauce
export const chosenSauce = createEvent<Sauce>();

export const $constructorSauce = createStore<Sauce | null>(null)
  .on(chosenSauce, (_, sauce) => sauce)
  .on(addedPizza, () => null);

sample({
  clock: $sauces.updates,
  fn: (sauces) => sauces[0],
  target: chosenSauce,
});

// Size
export const chosenSize = createEvent<Size>();

export const $constructorSize = createStore<Size | null>(null)
  .on(chosenSize, (_, size) => size)
  .on(addedPizza, () => null);

sample({
  clock: $sizes.updates,
  fn: (sizes) => sizes[1],
  target: chosenSize,
});

// Name
export const changedName = createEvent<string>();

export const $constructorName = createStore<string>('')
  .on(changedName, (_, name) => name)
  .on(addedPizza, () => '');

// Price
const calculatedPrice = createEvent<number>();

export const $constructorPrice = createStore<number>(0)
  .on(calculatedPrice, (_, price) => price)
  .on(addedPizza, () => 0);

// Whole pizza
export const $isReady = createStore(false).on($constructorName, (_, name) =>
  Boolean(name),
);

const updatedPizza = merge([
  addedIngredient,
  removedIngredient,
  hasBeenSetIngredientCount,
  chosenSize,
  chosenSauce,
  chosenDough,
]);

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

const $pizza = combine({
  ingredients: $constructorIngredients,
  dough: $constructorDough,
  sauce: $constructorSauce,
  size: $constructorSize,
  price: $constructorPrice,
  name: $constructorName,
});

export const cookClicked = createEvent();

sample({
  clock: cookClicked,
  source: $pizza,
  fn: (pizza) => pizza as Pizza,
  target: addedPizza,
});
