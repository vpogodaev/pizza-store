import React, { FC, useMemo } from 'react';
import { Filling } from '@features/constructor/pizza/Filling/Filling';
import style from './Fillings.module.scss';

type FillingsProps = {
  ingredients: (
    | 'ananas'
    | 'bacon'
    | 'blueCheese'
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
    | 'tomatoes'
  )[];
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
