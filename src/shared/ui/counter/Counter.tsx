import React, { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import style from './Counter.module.scss';

type CounterProps = {
  value: number;
  onMinusClicked: MouseEventHandler<HTMLButtonElement>;
  onPlusClicked: MouseEventHandler<HTMLButtonElement>;
  onValueChanged: ChangeEventHandler<HTMLInputElement>;
  extraClassName: string;
  minusDisabled?: boolean;
  plusDisabled?: boolean;
};

export const Counter: FC<CounterProps> = ({
  value,
  onMinusClicked,
  onPlusClicked,
  onValueChanged,
  extraClassName,
  minusDisabled,
  plusDisabled,
}) => {
  return (
    <div
      className={`${style.counter} ${style['counter--orange']}${
        extraClassName ? ` ${extraClassName}` : ''
      }`}
    >
      <button
        type="button"
        className={`${style.counter__button} ${style['counter__button--minus']}`}
        disabled={minusDisabled}
        onClick={onMinusClicked}
      >
        <span className="visually-hidden">Меньше</span>
      </button>
      <input
        type="text"
        name="counter"
        className={style.counter__input}
        value={value}
        onChange={onValueChanged}
      />
      <button
        type="button"
        className={`${style.counter__button} ${style['counter__button--plus']}`}
        disabled={plusDisabled}
        onClick={onPlusClicked}
      >
        <span className="visually-hidden">Больше</span>
      </button>
    </div>
  );
};
