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
import style from './Constructor.module.scss';

type ConstructorProps = {};

const IngredientsGate = createGate();
const DoughGate = createGate();
const SauceGate = createGate();
const SizeGate = createGate();

export const Constructor: FC<ConstructorProps> = ({}) => {
  useGate(IngredientsGate);
  useGate(DoughGate);
  useGate(SauceGate);
  useGate(SizeGate);

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

sample({ clock: IngredientsGate.open, target: readyToLoadIngredients });
sample({ clock: DoughGate.open, target: readyToLoadDoughs });
sample({ clock: SauceGate.open, target: readyToLoadSauces });
sample({ clock: SizeGate.open, target: readyToLoadSizes });
