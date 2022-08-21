import React, { ChangeEventHandler, FC } from 'react';
import style from './TextBox.module.scss';

type TextBoxProps = {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  placeholder?: string;
};

export const TextBox: FC<TextBoxProps> = ({
  title,
  value,
  name,
  onChange,
  placeholder,
}) => {
  return (
    <label className={style.input}>
      <span className="visually-hidden">{title}</span>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
