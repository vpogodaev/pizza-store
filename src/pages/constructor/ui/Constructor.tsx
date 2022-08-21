import React, { FC } from 'react';
import { DoughCard, IngredientsCard, Pizza, SizeCard } from '@features/constructor';
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