import { api } from '@shared/api/client/api';
import {
  mapResponseDoughToEntity,
  ResponseDough,
} from '@shared/api/modules/dough/mappers';
import { Dough } from '@entities/pizza/model/dough';

export const getDough = async () =>
  await api.get<ResponseDough[]>('dough').then((r) => {
    const result: Dough[] = [];

    r.data.forEach((dough: ResponseDough) => {
      const mapped = mapResponseDoughToEntity(dough);
      if (mapped) {
        result.push(mapped);
      }
    });

    return result;
  });
