import React, { FC } from 'react';
import style from './Back.module.scss';

type BackProps = {};

export const Back: FC<BackProps> = ({}) => {
  return (
    <>
      <div className={style.footer__more}>
        <a
          href="#"
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
};
