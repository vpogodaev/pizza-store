import { createEffect, createEvent, createStore, sample } from 'effector';
import { getSizes } from '@shared/api/modules/sizes';

export type SizeType = 'small' | 'normal' | 'big';

export type Size = {
  id: number;
  name: string;
  multiplier: number;
  type: SizeType;
};

const getSizesFx = createEffect(async () => await getSizes());

export const readyToLoadSizes = createEvent();

export const $sizes = createStore<Size[]>([]).on(
  getSizesFx.doneData,
  (_, sizes) => sizes,
);

sample({ clock: readyToLoadSizes, target: getSizesFx });
