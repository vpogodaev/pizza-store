import React, { FC } from 'react';
import { Misc } from '@features/cart/ui/misc/Misc/Misc';
import cola from '@shared/ui/assets/img/cola.svg';
import sauce from '@shared/ui/assets/img/sauce.svg';
import potato from '@shared/ui/assets/img/potato.svg';
import style from './MiscList.module.scss';

type MiscListProps = {};

const misc = [
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

export const MiscList: FC<MiscListProps> = ({}) => {
  const productsToRender = misc.map(({ title, img, price }, i) => (
    <Misc
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
