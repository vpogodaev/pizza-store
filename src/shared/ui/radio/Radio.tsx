import React, { ChangeEventHandler, FC } from 'react';
import style from './Radio.module.scss';

type RadioProps = {
  title: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  extraClassName?: string;
  name?: string;
  value?: string;
};

export const Radio: FC<RadioProps> = ({
  title,
  checked,
  extraClassName,
  onChange,
  name,
  value,
}) => {
  return (
    <label
      className={`${style.radio}${extraClassName ? ` ${extraClassName}` : ''}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{title}</span>
    </label>
  );
};
