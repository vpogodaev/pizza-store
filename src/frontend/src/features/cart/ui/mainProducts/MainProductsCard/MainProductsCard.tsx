import React, { ChangeEvent, FC } from 'react';
import { HeadlessSheet } from '@shared/ui/components';
import { Pizza } from '@features/cart/ui/mainProducts/Pizza/Pizza';
import { useStore } from 'effector-react';
import {
  $pizzasProduct,
  $pizzasProductsCount,
  addedPizza,
  removedPizza,
} from '@entities/cart/model/cart';
import { Pizza as TPizza } from '@entities/pizza/model/pizza';
import style from './MainProductsCard.module.scss';

type MainProductsCardProps = {};

export const MainProductsCard: FC<MainProductsCardProps> = ({}) => {
  const pizzas = useStore($pizzasProduct);
  const pizzasCount = useStore($pizzasProductsCount);

  const handlePlusClicked = (pizza: TPizza) => {
    addedPizza(pizza);
  };
  const handleMinusClicked = (pizza: TPizza) => {
    removedPizza(pizza);
  };
  const handleCountChanged = (
    e: ChangeEvent<HTMLInputElement>,
    pizza: TPizza,
  ) => {
    //
  };

  const pizzasToRender = Object.keys(pizzasCount).map((key, i) => {
    const pizza = pizzas.find((p) => p.name === key);
    if (!pizza) {
      return null;
    }

    const sizeDough = `${pizza.size.name}, ${pizza.dough.name}`;
    const sauce = `Соус: ${pizza.sauce.name}`;
    const ingredients = `Начинка: ${pizza.ingredients
      .map((i) => i.name)
      .join(', ')}`;
    const price = `${pizza.price} ₽`;
    return (
      <Pizza
        title={pizza.name}
        info={[sizeDough, sauce, ingredients]}
        price={price}
        onPlusClicked={() => handlePlusClicked(pizza)}
        onMinusClicked={() => handleMinusClicked(pizza)}
        count={pizzasCount[pizza.name]}
        onCountChanged={(e) => handleCountChanged(e, pizza)}
        key={i.toString()}
      />
    );
  });

  if (!pizzasToRender?.length) {
    return null;
  }

  return (
    <HeadlessSheet
      sheetClassName={style['cart-list']}
      as="ul"
    >
      {pizzasToRender}
    </HeadlessSheet>
  );
};
