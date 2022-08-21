import React, { FC } from 'react';
import { InfoForm, MainProductsCard, MiscProductsList } from '@features/cart';
import { CartFooter } from '@widgets/cart';
import style from './Cart.module.scss';

type CartProps = {};

export const Cart: FC<CartProps> = ({}) => {
  return (
    <form className={style['layout-form']}>
      <main className="content">
        <div className="container">
          <div className={style.cart__title}>
            <h1 className="title title--big">Корзина</h1>
          </div>
          {/*<div className="sheet cart__empty">*/}
          {/*  <p>В корзине нет ни одного товара</p>*/}
          {/*</div>*/}

          <MainProductsCard />
          <MiscProductsList />
          <InfoForm />
        </div>
      </main>
      <CartFooter />
    </form>
  );
};
