import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '@pages/paths';
import style from './Back.module.scss';

type BackProps = {};

export const Back: FC<BackProps> = ({}) => (
  <>
    <div className={style.footer__more}>
      <Link
        to={paths.constructor()}
        className="button button--border button--arrow"
      >
        Хочу еще одну
      </Link>
    </div>
    <p className="footer__text">
      Перейти к конструктору
      <br />
      чтоб собрать ещё одну пиццу
    </p>
  </>
);
