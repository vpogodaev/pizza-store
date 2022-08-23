import React, { FC } from 'react';
import { Sheet } from '@shared/ui/components';
import { SauceRow } from '@features/constructor/ui/ingredients/SauceRow/SauceRow';
import { Ingredient } from '@features/constructor/ui/ingredients/Ingredient/Ingredient';
import { $ingredients } from '@entities/pizza/model/ingredient';
import { useStore } from 'effector-react';
import style from './IngredientsCard.module.scss';

type IngredientsCardProps = {};

export const IngredientsCard: FC<IngredientsCardProps> = ({}) => {
  const ingredients = useStore($ingredients);

  const ingredientsToRender = ingredients.map((i) => (
    <Ingredient
      title={i.name}
      type={i.type}
      key={i.type}
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
