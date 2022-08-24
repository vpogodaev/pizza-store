import { createEffect, createEvent, createStore, sample } from 'effector';
import { getDough } from '@shared/api/modules/dough';

export type DoughType = 'light' | 'large';

export type Dough = {
  id: number;
  name: string;
  price: number;
  description: string;
  type: DoughType;
};

const getDoughsFx = createEffect(async () => await getDough());

export const readyToLoadDoughs = createEvent();

export const $doughs = createStore<Dough[]>([]).on(
  getDoughsFx.doneData,
  (_, doughs) => doughs,
);

sample({ clock: readyToLoadDoughs, target: getDoughsFx });
