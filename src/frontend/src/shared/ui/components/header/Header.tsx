import React, { FC } from 'react';
import logo from '@shared/ui/assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { paths } from '@pages/paths';
import { useStore } from 'effector-react';
import { $totalPrice } from '@entities/cart/model/cart';
import style from './Header.module.scss';

type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  const totalPrice = useStore($totalPrice);

  const price = `${totalPrice} ₽`;

  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <Link
          to={paths.home()}
          className="logo"
        >
          <img
            src={logo}
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </Link>
      </div>
      <div className={style.header__cart}>
        <a href="@shared/ui/components/header/Header#">{price}</a>
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
