import React, { ChangeEventHandler, FC } from 'react';
import { Radio } from '@shared/ui/radio/Radio';
import style from './Sauce.module.scss';

type SauceProps = {
  type: 'tomato' | 'creamy';
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

export const Sauce: FC<SauceProps> = ({ type, title, onChange, checked }) => {
  return (
    <Radio
      title={title}
      onChange={onChange}
      checked={checked}
      extraClassName={style.ingredients__input}
    />
  );
};
