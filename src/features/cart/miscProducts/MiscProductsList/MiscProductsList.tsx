import React, { FC } from 'react';
import { MiscProduct } from '@features/cart/miscProducts/MiscProduct/MiscProduct';
import style from './MiscProductsList.module.scss';

type MiscProductsListProps = {};

const miscProducts = [
  {
    title: 'Coca-Cola 0,5 литра',
    imgSrc: 'src/app/assets/img/cola.svg',
    price: '× 56 ₽',
  },
  {
    title: 'Острый соус',
    imgSrc: 'src/app/assets/img/sauce.svg',
    price: '× 30 ₽',
  },
  {
    title: 'Картошка из печи',
    imgSrc: 'src/app/assets/img/potato.svg',
    price: '× 56 ₽',
  },
];

export const MiscProductsList: FC<MiscProductsListProps> = ({}) => {
  const productsToRender = miscProducts.map(({ title, imgSrc, price }, i) => (
    <MiscProduct
      title={title}
      imgSrc={imgSrc}
      price={price}
      key={i.toString()}
    />
  ));

  return (
    <div className={style.cart__additional}>
      <ul className={style['additional-list']}>{productsToRender}</ul>
    </div>
  );
};
