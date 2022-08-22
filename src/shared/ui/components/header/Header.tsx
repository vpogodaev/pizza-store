import React, { FC } from 'react';
import logo from '@shared/ui/assets/img/logo.svg';
import style from './Header.module.scss';

type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <a
          href="@shared/ui/components/header/Header#"
          className="logo"
        >
          <img
            src={logo}
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div className={style.header__cart}>
        <a href="@shared/ui/components/header/Header#">0 ₽</a>
      </div>
      <div className={style.header__user}>
        <a
          href="@shared/ui/components/header/Header#"
          className={style.header__login}
        >
          <span>Войти</span>
        </a>
      </div>
    </header>
  );
};
