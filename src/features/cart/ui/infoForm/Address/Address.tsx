import React, { ChangeEvent, FC, SetStateAction, useState } from 'react';
import { AddressItem } from '@features/cart/ui/infoForm/Address/AddressItem/AddressItem';
import style from './Address.module.scss';

type AddressProps = {};

export const Address: FC<AddressProps> = ({}) => {
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [apartment, setApartment] = useState('');

  const handleItemChange = (
    e: ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<SetStateAction<string>>,
  ) => {
    set(e.target.value);
  };

  return (
    <div className={style['cart-form__address']}>
      <span className={style['cart-form__label']}>Новый адрес:</span>

      <AddressItem
        title="Улица*"
        name="street"
        value={street}
        onChange={(e) => handleItemChange(e, setStreet)}
      />

      <AddressItem
        title="Дом*"
        name="house"
        value={house}
        onChange={(e) => handleItemChange(e, setHouse)}
      />

      <AddressItem
        title="Квартира"
        name="apartment"
        value={apartment}
        onChange={(e) => handleItemChange(e, setApartment)}
      />
    </div>
  );
};
