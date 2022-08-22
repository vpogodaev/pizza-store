import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import pizzaImg from '@app/../../../../shared/ui/assets/img/product.svg';
import { Counter } from '@shared/ui/components';
import style from './Pizza.module.scss';

type PizzaProps = {
  title: string;
  info: string[];
  price: string;
};

export const Pizza: FC<PizzaProps> = ({ title, info, price }) => {
  const [count, setCount] = useState(0);

  const handleCountChangeClicked = (newValue: number) => {
    setCount(newValue);
  };

  const handleCountChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (Number.isInteger(newValue)) {
      setCount(newValue);
    }
  };

  const infoToRender = useMemo(() => {
    return info.map((item, i) => <li key={i.toString()}>{item}</li>);
  }, [info]);

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
        onMinusClicked={() => handleCountChangeClicked(count - 1)}
        onPlusClicked={() => handleCountChangeClicked(count + 1)}
        onValueChanged={handleCountChanged}
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
