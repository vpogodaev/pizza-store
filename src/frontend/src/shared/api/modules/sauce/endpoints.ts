import { api } from '@shared/api/client/api';
import {
  mapResponseSauceToEntity,
  ResponseSauce,
} from '@shared/api/modules/sauce/mappers';
import { Sauce } from '@entities/pizza/model/sauce';

export const getSauces = async () =>
  await api.get<ResponseSauce[]>('sauces').then((r) =>
    r.data.reduce<Sauce[]>((acc, sauce) => {
      const mapped = mapResponseSauceToEntity(sauce);
      if (mapped) {
        acc.push(mapped);
      }

      return acc;
    }, []),
  );
