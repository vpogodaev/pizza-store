import React, { FC } from 'react';
import style from './ReceiveOption.module.scss';

type ReceiveOptionProps = {};

export const ReceiveOption: FC<ReceiveOptionProps> = ({}) => {
  return (
    <label className={style['cart-form__select']}>
      <span className={style['cart-form__label']}>Получение заказа:</span>

      <select
        name="receive"
        className="select"
      >
        <option value="1">Заберу сам</option>
        <option value="2">Новый адрес</option>
        <option value="3">Дом</option>
      </select>
    </label>
  );
};
