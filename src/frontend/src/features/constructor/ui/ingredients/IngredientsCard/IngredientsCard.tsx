import React, { ChangeEvent, FC } from 'react';
import { Sheet } from '@shared/ui/components';
import { SauceRow } from '@features/constructor/ui/ingredients/SauceRow/SauceRow';
import { Ingredient } from '@features/constructor/ui/ingredients/Ingredient/Ingredient';
import {
  $ingredients,
  Ingredient as TIngredient,
} from '@entities/pizza/model/ingredient';
import { useStore } from 'effector-react';
import {
  addedIngredient,
  removedIngredient,
  ingredientCountChanged,
  $constructorIngredientsCounts,
  $canAddMore,
} from '@features/constructor/model/pizzaConstructor';
import style from './IngredientsCard.module.scss';

type IngredientsCardProps = {};

export const IngredientsCard: FC<IngredientsCardProps> = ({}) => {
  const ingredients = useStore($ingredients);
  const ingredientsCounts = useStore($constructorIngredientsCounts);
  const canAddMore = useStore($canAddMore);

  const handlePlusClicked = (ingredient: TIngredient) => {
    addedIngredient(ingredient);
  };

  const handleMinusClicked = (ingredient: TIngredient) => {
    removedIngredient(ingredient);
  };

  const handleValueChanged = (
    e: ChangeEvent<HTMLInputElement>,
    ingredient: TIngredient,
  ) => {
    ingredientCountChanged({ count: Number(e.target.value), ingredient });
  };

  const ingredientsToRender = ingredients.map((i) => (
    <Ingredient
      title={i.name}
      type={i.type}
      key={i.type}
      value={ingredientsCounts?.[i.type] || 0}
      canAddMore={canAddMore}
      onMinusClicked={() => handleMinusClicked(i)}
      onPlusClicked={() => handlePlusClicked(i)}
      onValueChanged={(e) => handleValueChanged(e, i)}
    />
  ));

  return (
    <div className={style.content__ingredients}>
      <Sheet title="Выберите ингредиенты">
        <SauceRow />

        <div className={style.ingredients__filling}>
          <p>Начинка:</p>

          <ul className={style.ingredients__list}>{ingredientsToRender}</ul>
        </div>
      </Sheet>
    </div>
  );
};
