import React, { ChangeEvent, FC, useState } from 'react';
import { Fillings } from '@features/constructor/pizza/Fillings/Fillings';
import { TextBox } from '@shared/ui';
import style from './Pizza.module.scss';

type PizzaProps = {};

export const Pizza: FC<PizzaProps> = ({}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [sauce] = useState('tomato');
  const [size] = useState('big');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        <div className={`${style.pizza} ${style[`pizza--foundation--${size}-${sauce}`]}`}>
          <Fillings ingredients={['ananas', 'bacon', 'cheddar']} />
        </div>
      </div>

      <div className={style.content__result}>
        <p>Итого: {price} ₽</p>
        <button
          type="button"
          className="button"
          disabled
        >
          Готовьте!
        </button>
      </div>
    </div>
  );
};
