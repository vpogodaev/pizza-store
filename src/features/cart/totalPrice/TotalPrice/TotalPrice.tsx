import React, { FC } from 'react';
import style from './TotalPrice.module.scss';

type TotalPriceProps = {};

export const TotalPrice: FC<TotalPriceProps> = ({}) => {
  const price = '2 228 ₽';
  return (
    <div className={style.footer__price}>
      <b>Итого: {price}</b>
    </div>
  );
};
