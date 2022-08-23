import React, { FC } from 'react';
import { IngredientType } from '@entities/pizza/model/ingredient';
import style from './Filling.module.scss';

type FillingProps = {
  type: IngredientType;
  second?: boolean;
  third?: boolean;
};

export const Filling: FC<FillingProps> = ({ type, second, third }) => {
  const typeClassName = style[`pizza__filling--${type}`];
  const secondClassName = second ? ` ${style['pizza__filling--second']}` : '';
  const thirdClassName = second ? ` ${style['pizza__filling--third']}` : '';
  return (
    <div
      className={`${style.pizza__filling} ${typeClassName}${secondClassName}${thirdClassName}`}
    />
  );
};
