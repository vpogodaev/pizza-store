import React, { FC } from 'react';
import { Back, Submit, TotalPrice } from '@features/cart';
import style from './CartFooter.module.scss';

type CartFooterProps = {};

export const CartFooter: FC<CartFooterProps> = ({}) => {
  return (
    <section className={style.footer}>
      <Back />
      <TotalPrice />
      <Submit />
    </section>
  );
};
