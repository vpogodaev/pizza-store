import React, { ChangeEventHandler, FC } from 'react';
import { TextBox } from '@shared/ui/components';
import style from './AddressItem.module.scss';

type AddressItemProps = {
  title: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  small?: boolean;
};

export const AddressItem: FC<AddressItemProps> = ({
  small,
  onChange,
  value,
  name,
  title,
}) => {
  return (
    <div
      className={`${style['cart-form__input']} ${
        small ? style['cart-form__input--small'] : ''
      }`}
    >
      <TextBox
        title={title}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
