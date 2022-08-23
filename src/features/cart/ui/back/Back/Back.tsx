import React, { FC } from 'react';
import style from './Back.module.scss';

type BackProps = {};

export const Back: FC<BackProps> = ({}) => (
  <>
    <div className={style.footer__more}>
      <a
        href="@features/cart/ui/back/Back/Back#"
        className="button button--border button--arrow"
      >
        Хочу еще одну
      </a>
    </div>
    <p className="footer__text">
      Перейти к конструктору
      <br />
      чтоб собрать ещё одну пиццу
    </p>
  </>
);
