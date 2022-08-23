import { createEvent, createStore, merge, sample } from 'effector';
import { $doughs, Dough } from '@entities/pizza/model/dough';
import { $sizes, Size } from '@entities/pizza/model/size';
import { $sauces, Sauce } from '@entities/pizza/model/sauce';
import { Ingredient, IngredientType } from '@entities/pizza/model/ingredient';

type PizzaConstructorIngredients = Record<IngredientType, [number, Ingredient]>;

type PizzaConstructor = {
  dough?: Dough;
  size?: Size;
  sauce?: Sauce;
  ingredients?: PizzaConstructorIngredients;
  name: string;
  price: number;
};

export const addedIngredient = createEvent<Ingredient>();
export const removedIngredient = createEvent<Ingredient>();
export const chosenDough = createEvent<Dough>();
export const chosenSauce = createEvent<Sauce>();
export const chosenSize = createEvent<Size>();
export const changedName = createEvent<string>();

export const setIngredientCount = createEvent<[Ingredient, number]>();
const hasBeenSetIngredientCount = createEvent<PizzaConstructor>();

const calculatedPrice = createEvent<number>();

const updatedPizza = merge([
  addedIngredient,
  removedIngredient,
  hasBeenSetIngredientCount,
  chosenSize,
  chosenSauce,
  chosenDough,
]);

export const $pizzaConstructor = createStore<PizzaConstructor>({
  name: '',
  price: 0,
})
  .on(addedIngredient, (state, ingredient) => {
    const newIngredients = state.ingredients
      ? { ...state.ingredients }
      : ({} as PizzaConstructorIngredients);

    if (!newIngredients[ingredient.type]) {
      newIngredients[ingredient.type] = [1, ingredient];
    } else {
      newIngredients[ingredient.type][0] += 1;
    }
    return {
      ...state,
      ingredients: { ...newIngredients },
    };
  })
  .on(removedIngredient, (state, ingredient) => {
    const newIngredients = state.ingredients
      ? { ...state.ingredients }
      : ({} as PizzaConstructorIngredients);

    if (newIngredients[ingredient.type]) {
      const newCount = newIngredients[ingredient.type][0] - 1;
      newIngredients[ingredient.type][0] = newCount > 0 ? newCount : 0;
    }
    return {
      ...state,
      ingredients: { ...newIngredients },
    };
  })
  .on(chosenDough, (state, newDough) => ({
    ...state,
    dough: newDough,
  }))
  .on(chosenSauce, (state, sauce) => ({
    ...state,
    sauce,
  }))
  .on(chosenSize, (state, size) => ({
    ...state,
    size,
  }))
  .on(changedName, (state, name) => ({
    ...state,
    name,
  }))
  .on(calculatedPrice, (state, price) => ({ ...state, price }));

export const $ingredientsCount = $pizzaConstructor.map(({ ingredients }) => {
  if (!ingredients) {
    return 0;
  }

  return Object.keys(ingredients).reduce(
    (acc, key) => acc + (ingredients[key as IngredientType]?.[0] || 0),
    0,
  );
});
export const $ingredientsTypes = $pizzaConstructor.map<IngredientType[]>(
  ({ ingredients }) => {
    if (!ingredients) {
      return [];
    }

    return Object.keys(ingredients).reduce((acc, key) => {
      const type = key as IngredientType;
      if (ingredients[type]?.[0]) {
        for (let i = 0; i < ingredients[type][0]; i++) {
          acc.push(type);
        }
      }
      return acc;
    }, [] as IngredientType[]);
  },
);

$pizzaConstructor.on(hasBeenSetIngredientCount, (_, newState) => newState);

sample({
  clock: setIngredientCount,
  source: {
    state: $pizzaConstructor,
    ingredientsCount: $ingredientsCount,
  },
  fn: ({ state, ingredientsCount }, [ingredient, count]) => {
    const newIngredients = state.ingredients
      ? { ...state.ingredients }
      : ({} as PizzaConstructorIngredients);

    const currentCount = ingredientsCount;
    if (currentCount >= 3) {
      return state;
    }

    const maxAvailableCount =
      3 - currentCount + (newIngredients[ingredient.type]?.[0] || 0);

    if (!newIngredients[ingredient.type]) {
      newIngredients[ingredient.type] = [0, ingredient];
    }

    let newCount = 0;

    if (count > 0) {
      newCount = count > maxAvailableCount ? maxAvailableCount : count;
    } else if (count < 0) {
      newCount = 0;
    }

    newIngredients[ingredient.type] = [newCount, ingredient];

    return {
      ...state,
      ingredients: { ...newIngredients },
    };
  },
  target: hasBeenSetIngredientCount,
});

$pizzaConstructor.watch((state) => {
  console.log('$pizzaConstructor.watch state', state);
});

export const $isReady = $pizzaConstructor.map(
  ({ ingredients, size, sauce, price, name, dough }) => {
    return !!(price && name);
  },
);

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
  source: $pizzaConstructor,
  fn: (constructor) => {
    const { dough, sauce, ingredients, size } = constructor;
    const ingredientsPrice = !ingredients
      ? 0
      : Object.keys(ingredients).reduce((acc, key) => {
          const type = key as IngredientType;
          return acc + ingredients[type][1].price * ingredients[type][0];
        }, 0);
    const doughPrice = dough?.price || 0;
    const saucePrice = sauce?.price || 0;
    const sizeMultiplier = size?.multiplier || 0;

    return (ingredientsPrice + doughPrice + saucePrice) * sizeMultiplier;
  },
  target: calculatedPrice,
});
