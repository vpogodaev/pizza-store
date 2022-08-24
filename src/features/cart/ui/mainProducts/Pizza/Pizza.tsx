import React, { ChangeEventHandler, FC, useMemo } from 'react';
import pizzaImg from '@shared/ui/assets/img/product.svg';
import { Counter } from '@shared/ui/components';
import style from './Pizza.module.scss';

type PizzaProps = {
  title: string;
  info: string[];
  price: string;
  count: number;
  onPlusClicked: () => void;
  onMinusClicked: () => void;
  onCountChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Pizza: FC<PizzaProps> = ({
  title,
  info,
  price,
  count,
  onCountChanged,
  onMinusClicked,
  onPlusClicked,
}) => {
  const infoToRender = useMemo(
    () => info.map((item, i) => <li key={i.toString()}>{item}</li>),
    [info],
  );

  return (
    <li className={style['cart-list__item']}>
      <div className={`${style.product} ${style['cart-list__product']}`}>
        <img
          src={pizzaImg}
          className="product__img"
          width="56"
          height="56"
          alt={title}
        />
        <div className={style.product__text}>
          <h2>{title}</h2>
          <ul>{infoToRender}</ul>
        </div>
      </div>

      <Counter
        value={count}
        onMinusClicked={onMinusClicked}
        onPlusClicked={onPlusClicked}
        onValueChanged={onCountChanged}
        extraClassName={style['cart-list__counter']}
        color="orange"
      />

      <div className={style['cart-list__price']}>
        <b>{price}</b>
      </div>
      <div className="cart-list__button">
        <button
          type="button"
          className={style['cart-list__edit']}
        >
          Изменить
        </button>
      </div>
    </li>
  );
};
