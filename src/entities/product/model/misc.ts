import { createEffect, createEvent, createStore, sample } from 'effector';
import { getMisc } from '@shared/api/modules/misc/endpoints';

export type MiscType = 'cola' | 'sauce' | 'potato';

export type Misc = {
  id: number;
  name: string;
  price: number;
  type: MiscType;
};

const getMiscFx = createEffect(async () => await getMisc());
export const readyToLoadMiscs = createEvent();

export const $miscs = createStore<Misc[]>([]).on(
  getMiscFx.doneData,
  (_, miscs) => miscs,
);

sample({ clock: readyToLoadMiscs, target: getMiscFx });
