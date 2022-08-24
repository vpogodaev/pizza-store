import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import { Counter, HeadlessSheet } from '@shared/ui/components';
import style from './Misc.module.scss';

type MiscProps = {
  title: string;
  imgSrc: string;
  price: string;
  count: number;
  onPlusClicked: () => void;
  onMinusClicked: () => void;
  canMinus: boolean;
  onCountChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Misc: FC<MiscProps> = ({
  title,
  imgSrc,
  price,
  count,
  onMinusClicked,
  onPlusClicked,
  onCountChanged,
  canMinus,
}) => {
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
          onMinusClicked={onMinusClicked}
          onPlusClicked={onPlusClicked}
          onValueChanged={onCountChanged}
          extraClassName={style['additional-list__counter']}
          minusDisabled={canMinus}
          color="orange"
        />

        <div className={style['additional-list__price']}>
          <b>{price}</b>
        </div>
      </div>
    </HeadlessSheet>
  );
};
