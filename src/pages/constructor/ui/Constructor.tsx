import React, { FC } from 'react';
import { DoughCard } from '@features/constructor/dough/DoughCard/DoughCard';
import { SizeCard } from '@features/constructor/size/SizeCard/SizeCard';
import { IngredientsCard } from '@features/constructor/ingredients/IngredientsCard/IngredientsCard';
import { Pizza } from '@features/constructor/pizza/Pizza/Pizza';
import style from './Constructor.module.scss';

type ConstructorProps = {};

export const Constructor: FC<ConstructorProps> = ({}) => {
  return (
    <main className="content">
      <div className="content__wrapper">
        <h1 className="title title--big">
          Конструктор пиццы
        </h1>

        <DoughCard />
        <SizeCard />
        <IngredientsCard />
        <Pizza />
      </div>
    </main>
  );
};