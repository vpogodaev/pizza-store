import React, { ChangeEvent, FC, useState } from 'react';
import { Counter, HeadlessSheet } from '@shared/ui';
import style from './MiscProduct.module.scss';

type MiscProductProps = {
  title: string;
  imgSrc: string;
  price: string;
};

export const MiscProduct: FC<MiscProductProps> = ({title, imgSrc, price}) => {
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

  return (
    <HeadlessSheet
      as="li"
      sheetClassName={style['additional-list__item']}
    >
      <p className={style['additional-list__description']}>
        <img
          src={imgSrc}
          width="39"
          height="60"
          alt={title}
        />
        <span>{title}</span>
      </p>

      <div className={style['additional-list__wrapper']}>
        <Counter
          value={count}
          onMinusClicked={() => handleCountChangeClicked(count - 1)}
          onPlusClicked={() => handleCountChangeClicked(count + 1)}
          onValueChanged={handleCountChanged}
          extraClassName={style['additional-list__counter']}
          color="orange"
        />

        <div className={style['additional-list__price']}>
          <b>{price}</b>
        </div>
      </div>
    </HeadlessSheet>
  );
};
