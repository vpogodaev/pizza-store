import React, { FC } from 'react';
import {
  DoughCard,
  IngredientsCard,
  Pizza,
  SizeCard,
} from '@features/constructor';
import { createGate, useGate } from 'effector-react';
import { sample } from 'effector';
import { readyToLoadDoughs } from '@entities/pizza/model/dough';
import { readyToLoadSauces } from '@entities/pizza/model/sauce';
import { readyToLoadSizes } from '@entities/pizza/model/size';
import { readyToLoadIngredients } from '@entities/pizza/model/ingredient';

type ConstructorProps = {};

const ConstructorGate = createGate();

export const Constructor: FC<ConstructorProps> = ({}) => {
  useGate(ConstructorGate);

  return (
    <main className="content">
      <div className="content__wrapper">
        <h1 className="title title--big">Конструктор пиццы</h1>

        <DoughCard />
        <SizeCard />
        <IngredientsCard />
        <Pizza />
      </div>
    </main>
  );
};

sample({
  clock: ConstructorGate.open,
  target: [
    readyToLoadIngredients,
    readyToLoadDoughs,
    readyToLoadSauces,
    readyToLoadSizes,
  ],
});
