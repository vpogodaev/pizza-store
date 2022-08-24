import React, { FC } from 'react';
import { Sheet } from '@shared/ui/components';
import { Size } from '@features/constructor/ui/size/Size/Size';
import { useStore } from 'effector-react';
import { $sizes, Size as TSize } from '@entities/pizza/model/size';
import { chosenSize } from '@features/constructor/model/pizzaConstructor';
import style from './SizeCard.module.scss';

type SizeCardProps = {};

export const SizeCard: FC<SizeCardProps> = ({}) => {
  const sizes = useStore($sizes);

  const handleSizeChanged = (size: TSize) => {
    chosenSize(size);
  };

  const sizesToRender = sizes.map((size) => {
    const { id, type, name } = size;
    return (
      <Size
        type={type}
        title={name}
        onClick={() => handleSizeChanged(size)}
        defaultChecked={type === 'normal'}
        key={id}
      />
    );
  });

  return (
    <div className={style.content__diameter}>
      <Sheet title="Выберите размер">{sizesToRender}</Sheet>
    </div>
  );
};
