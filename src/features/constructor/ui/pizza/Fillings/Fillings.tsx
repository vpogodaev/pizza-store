import React, { FC, useMemo } from 'react';
import { Filling } from '@features/constructor/ui/pizza/Filling/Filling';
import { IngredientType } from '@entities/pizza/model/ingredient';
import style from './Fillings.module.scss';

type FillingsProps = {
  ingredients: IngredientType[];
};

export const Fillings: FC<FillingsProps> = ({ ingredients }) => {
  const ingredientsToRender = useMemo(() => {
    const usedIngredients: { [key: string]: number } = {};

    return ingredients.map((i) => {
      if (usedIngredients[i]) {
        usedIngredients[i] += 1;
      } else {
        usedIngredients[i] = 1;
      }

      return (
        <Filling
          type={i}
          key={`${i}_${usedIngredients[i]}`}
          second={usedIngredients[i] === 2}
          third={usedIngredients[i] === 3}
        />
      );
    });
  }, [ingredients]);

  return <div className={style.pizza__wrapper}>{ingredientsToRender}</div>;
};
