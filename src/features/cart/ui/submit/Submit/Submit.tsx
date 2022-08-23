import React, { FC } from 'react';
import style from './Submit.module.scss';

type SubmitProps = {};

export const Submit: FC<SubmitProps> = ({}) => (
  <div className={style.footer__submit}>
    <button
      type="submit"
      className="button"
    >
      Оформить заказ
    </button>
  </div>
);
