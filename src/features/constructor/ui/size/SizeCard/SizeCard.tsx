import React, { FC } from 'react';
import { Sheet } from '@shared/ui/components';
import { Size } from '@features/constructor/ui/size/Size/Size';
import style from './SizeCard.module.scss';

type SizeCardProps = {};

export const SizeCard: FC<SizeCardProps> = ({}) => {
  const handleSizeChanged = (type: 'small' | 'normal' | 'big') => {
    console.log('handleSizeChanged', type);
  };

  return (
    <div className={style.content__diameter}>
      <Sheet title="Выберите размер">
        <Size type="small"
              title="23 см"
              onClick={() => handleSizeChanged('small')} />
        <Size type="normal"
              title="32 см"
              onClick={() => handleSizeChanged('normal')}
              defaultChecked />
        <Size type="big"
              title="45 см"
              onClick={() => handleSizeChanged('big')} />
      </Sheet>
    </div>
  );
};