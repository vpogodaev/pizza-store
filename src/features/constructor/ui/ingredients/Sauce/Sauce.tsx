import React, { ChangeEventHandler, FC } from 'react';
import { Radio } from '@shared/ui/components/radio/Radio';
import style from './Sauce.module.scss';

type SauceProps = {
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  defaultChecked?: boolean;
};

export const Sauce: FC<SauceProps> = ({
  defaultChecked,
  title,
  onChange,
  checked,
}) => {
  return (
    <Radio
      title={title}
      onChange={onChange}
      checked={checked}
      extraClassName={style.ingredients__input}
      defaultChecked={defaultChecked}
    />
  );
};
