import React, { FC } from 'react';
import style from './Filling.module.scss';

type FillingProps = {
  type:
    | 'ananas'
    | 'bacon'
    | 'blueCheese'
    | 'cheddar'
    | 'chile'
    | 'ham'
    | 'jalapeno'
    | 'mozzarella'
    | 'mushrooms'
    | 'olives'
    | 'onion'
    | 'parmesan'
    | 'salami'
    | 'salmon'
    | 'tomatoes';
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
