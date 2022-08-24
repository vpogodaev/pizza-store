import { api } from '@shared/api/client/api';
import { Size } from '@entities/pizza/model/size';
import {
  mapResponseSizeToEntity,
  ResponseSize,
} from '@shared/api/modules/sizes/mappers';

export const getSizes = () =>
  api.get<ResponseSize[]>('sizes').then((r) =>
    r.data.reduce<Size[]>((acc, size) => {
      const mapped = mapResponseSizeToEntity(size);
      if (mapped) {
        acc.push(mapped);
      }
      return acc;
    }, []),
  );
