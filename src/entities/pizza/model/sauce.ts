import { createEffect, createEvent, createStore, sample } from 'effector';
import { getSauces } from '@shared/api/modules/sauce';

export type SauceType = 'creamy' | 'tomato';

export type Sauce = {
  id: number;
  name: string;
  price: number;
  type: SauceType;
};

const getSaucesFx = createEffect(async () => await getSauces());
export const readyToLoadSauces = createEvent();

export const $sauces = createStore<Sauce[]>([]).on(
  getSaucesFx.doneData,
  (_, sauces) => sauces,
);

$sauces.watch((state) => {
  console.log('$sauces.watch', state);
});

sample({ clock: readyToLoadSauces, target: getSaucesFx });
