import React, { FC } from 'react';
import { Dough } from '@features/constructor/ui/dough/Dough/Dough';
import { Sheet } from '@shared/ui/components';
import { useStore } from 'effector-react';
import { $doughs, Dough as TDough } from '@entities/pizza/model/dough';
import { chosenDough } from '@features/constructor/model/pizzaConstructor';
import style from './DoughCard.module.scss';

type DoughCardProps = {};

export const DoughCard: FC<DoughCardProps> = ({}) => {
  const doughs = useStore($doughs);

  const handleDoughChanged = (dough: TDough) => {
    chosenDough(dough);
  };

  const doughsToRender = doughs.map((dough, index) => {
    const { type, description, name, id } = dough;
    return (
      <Dough
        title={name}
        description={description}
        type={type}
        onClick={() => handleDoughChanged(dough)}
        defaultChecked={index === 0}
        key={id}
      />
    );
  });

  return (
    <div className={style.content__dough}>
      <Sheet title="Выберите тесто">{doughsToRender}</Sheet>
    </div>
  );
};
