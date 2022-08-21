import React, { ChangeEvent, FC, useState } from 'react';
import { Counter } from '@shared/ui';
import style from './Ingredient.module.scss';

type IngredientProps = {
  title: string;
  type:
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
    | 'tomatoes';
};

export const Ingredient: FC<IngredientProps> = ({ title, type }) => {
  const [value, setValue] = useState(0);
  const handleValueChangeClicked = (newValue: number) => {
    setValue(newValue);
  };

  const handleValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (Number.isInteger(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <li className={style.ingredients__item}>
      <span className={`${style.filling} ${style[`filling--${type}`]}`}>
        {title}
      </span>

      <Counter
        value={value}
        onMinusClicked={() => handleValueChangeClicked(value - 1)}
        onPlusClicked={() => handleValueChangeClicked(value + 1)}
        onValueChanged={handleValueChanged}
        extraClassName={style.ingredients__counter}
      />
    </li>
  );
};