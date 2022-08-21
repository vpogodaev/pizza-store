import React, { FC } from 'react';
import { ReceiveOption } from '@features/cart/infoForm/ReceiveOption/ReceiveOption';
import { Phone } from '@features/cart/infoForm/Phone/Phone';
import { Address } from '@features/cart/infoForm/Address/Address';
import style from './InfoForm.module.scss';

type InfoFormProps = {};

export const InfoForm: FC<InfoFormProps> = ({}) => {
  return (
    <div className={style.cart__form}>
      <div className={style['cart-form']}>
        <ReceiveOption />
        <Phone />
        <Address />
      </div>
    </div>
  );
};
