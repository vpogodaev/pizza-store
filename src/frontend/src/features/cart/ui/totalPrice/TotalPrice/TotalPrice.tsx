import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { $totalPrice } from '@entities/cart/model/cart';
import style from './TotalPrice.module.scss';

type TotalPriceProps = {};

export const TotalPrice: FC<TotalPriceProps> = ({}) => {
  const totalPrice = useStore($totalPrice);

  const price = `${totalPrice} ₽`;
  return (
    <div className={style.footer__price}>
      <b>Итого: {price}</b>
    </div>
  );
};
