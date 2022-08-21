import React, { FC, MouseEventHandler } from 'react';
import style from './Dough.module.scss';

type DoughProps = {
  title: string;
  description: string;
  type: 'light' | 'large';
  onClick: MouseEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
};

export const Dough: FC<DoughProps> = ({ title, description, type, onClick, defaultChecked }) => {
  return (
    <label className={`${style.dough__input} ${style[`dough__input--${type}`]}`}>
      <input type="radio"
             name="dough"
             value={type}
             className="visually-hidden"
             defaultChecked={defaultChecked}
             onClick={onClick} />
      <b>{title}</b>
      <span>{description}</span>
    </label>
  );
};