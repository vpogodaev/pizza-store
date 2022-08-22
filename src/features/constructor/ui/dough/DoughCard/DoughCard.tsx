import React, { FC } from 'react';
import { Dough } from '@features/constructor/ui/dough/Dough/Dough';
import { Sheet } from '@shared/ui/components';
import style from './DoughCard.module.scss';

type DoughCardProps = {};

export const DoughCard: FC<DoughCardProps> = ({}) => {
  const handleDoughChanged = (type: 'light' | 'large') => {
    console.log('handleDoughChanged', type);
  };

  return (
    <div className={style.content__dough}>
      <Sheet title="Выберите тесто">
        <Dough title="Тонкое"
               description="Из твердых сортов пшеницы"
               type="light"
               onClick={() => handleDoughChanged('light')}
               defaultChecked />
        <Dough title="Толстое"
               description="Из твердых сортов пшеницы"
               type="large"
               onClick={() => handleDoughChanged('large')} />
      </Sheet>
    </div>
  );
};