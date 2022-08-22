import React, { FC, MouseEventHandler } from 'react';
import style from './Size.module.scss';

type SizeProps = {
  type: 'small' | 'normal' | 'big';
  title: string;
  onClick: MouseEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
};

export const Size: FC<SizeProps> = ({ type, title, onClick, defaultChecked }) => {
  return (
    <label className={`${style.diameter__input} ${style[`diameter__input--${type}`]}`}>
      <input type="radio"
             name="diameter"
             value={type}
             defaultChecked={defaultChecked}
             className="visually-hidden"
             onClick={onClick} />
      <span>{title}</span>
    </label>
  );
};