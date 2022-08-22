import React, { FC } from 'react';
import { MiscProduct } from '@features/cart/ui/miscProducts/MiscProduct/MiscProduct';
import cola from '@shared/ui/assets/img/cola.svg';
import sauce from '@shared/ui/assets/img/sauce.svg';
import potato from '@shared/ui/assets/img/potato.svg';
import style from './MiscProductsList.module.scss';

type MiscProductsListProps = {};

const miscProducts = [
  {
    title: 'Coca-Cola 0,5 литра',
    img: cola,
    price: '× 56 ₽',
  },
  {
    title: 'Острый соус',
    img: sauce,
    price: '× 30 ₽',
  },
  {
    title: 'Картошка из печи',
    img: potato,
    price: '× 56 ₽',
  },
];

export const MiscProductsList: FC<MiscProductsListProps> = ({}) => {
  const productsToRender = miscProducts.map(({ title, img, price }, i) => (
    <MiscProduct
      title={title}
      imgSrc={img}
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
