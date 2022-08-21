import React, { FC } from 'react';
import { HeadlessSheet } from '@shared/ui';
import { Pizza } from '@features/cart/mainProducts/Pizza/Pizza';
import style from './MainProductsCard.module.scss';

type MainProductsCardProps = {};

const pizzas = [
  {
    title: 'Капричоза',
    info: [
      '30 см, на тонком тесте',
      'Соус: томатный',
      'Начинка: грибы, лук, ветчина, пармезан, ананас',
    ],
    price: '782 ₽',
  },
  {
    title: 'Любимая пицца',
    info: [
      '30 см, на тонком тесте',
      'Соус: томатный',
      'Начинка: грибы, лук, ветчина, пармезан, ананас, бекон, блю чиз',
    ],
    price: '782 ₽',
  },
];

export const MainProductsCard: FC<MainProductsCardProps> = ({}) => {
  const pizzasToRender = pizzas.map((p, i) => (
    <Pizza
      title={p.title}
      info={p.info}
      price={p.price}
      key={i.toString()}
    />
  ));

  return (
    <HeadlessSheet
      sheetClassName={style['cart-list']}
      as="ul"
    >
      {pizzasToRender}
    </HeadlessSheet>
  );
};
