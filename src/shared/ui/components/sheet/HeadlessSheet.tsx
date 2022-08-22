import React, { FC, ReactNode } from 'react';
import style from './Sheet.module.scss';

type SheetProps = {
  children: ReactNode;
  sheetClassName?: string;
  as?: React.ElementType;
};

export const HeadlessSheet: FC<SheetProps> = ({
  children,
  sheetClassName,
  as = 'div',
}) => {
  const Element = as;

  return (
    <Element
      className={`${style.sheet}${sheetClassName ? ` ${sheetClassName}` : ''}`}
    >
      {children}
    </Element>
  );
};