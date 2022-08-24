import React, { FC, ReactNode } from 'react';
import style from './Sheet.module.scss';

type SheetProps = {
  title: ReactNode;
  children: ReactNode;
  contentClassName?: string;
};

export const Sheet: FC<SheetProps> = ({
  title,
  children,
  contentClassName,
}) => (
  <div className={style.sheet}>
    <h2 className={`title title--small ${style.sheet__title}`}>{title}</h2>

    <div
      className={`${style.sheet__content}${
        contentClassName ? ` ${contentClassName}` : ''
      }`}
    >
      {children}
    </div>
  </div>
);
