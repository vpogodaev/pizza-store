import React, { ChangeEvent, FC } from 'react';
import { Fillings } from '@features/constructor/ui/pizza/Fillings/Fillings';
import { TextBox } from '@shared/ui/components';
import {
  $ingredientsTypes,
  $isReady,
  $pizzaConstructor,
  changedName,
} from '@features/constructor/model/pizzaConstructor';
import { useStore } from 'effector-react';
import style from './Pizza.module.scss';

type PizzaProps = {};

export const Pizza: FC<PizzaProps> = ({}) => {
  const { name, sauce, size, price } = useStore($pizzaConstructor);
  const isReady = useStore($isReady);
  const ingredients = useStore($ingredientsTypes);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    changedName(e.target.value);
  };

  return (
    <div className={style.content__pizza}>
      <TextBox
        value={name}
        name="pizza_name"
        placeholder="Введите название пиццы"
        title="Название пиццы"
        onChange={handleNameChange}
        hideTitle
      />

      <div className={style.content__constructor}>
        <div
          className={`${style.pizza} ${
            style[
              `pizza--foundation--${
                size?.type === 'big' || size?.type === 'small'
                  ? size?.type
                  : 'big'
              }-${sauce?.type}`
            ]
          }`}
        >
          <Fillings ingredients={ingredients} />
        </div>
      </div>

      <div className={style.content__result}>
        <p>Итого: {price} ₽</p>
        <button
          type="button"
          className="button"
          disabled={!isReady}
        >
          Готовьте!
        </button>
      </div>
    </div>
  );
};
