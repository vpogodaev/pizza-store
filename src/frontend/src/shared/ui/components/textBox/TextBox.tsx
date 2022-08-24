import React, { ChangeEventHandler, FC } from 'react';
import style from './TextBox.module.scss';

type TextBoxProps = {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  placeholder?: string;
  hideTitle?: boolean;
  labelClassName?: string;
  bigLabel?: boolean;
};

export const TextBox: FC<TextBoxProps> = ({
  title,
  value,
  name,
  onChange,
  placeholder,
  hideTitle,
  labelClassName,
  bigLabel,
}) => (
  <label
    className={`${style.input}${
      bigLabel ? ` ${style['input--big-label']}` : ''
    }${labelClassName ? ` ${labelClassName}` : ''}`}
  >
    <span className={hideTitle ? 'visually-hidden' : ''}>{title}</span>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </label>
);
