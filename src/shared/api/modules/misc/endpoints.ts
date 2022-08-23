import { api } from '@shared/api/client/api';
import {
  mapResponseMiscToEntity,
  ResponseMisc,
} from '@shared/api/modules/misc/mappers';
import { Misc } from '@entities/product/model/misc';

export const getMisc = async () =>
  await api.get<ResponseMisc[]>('misc').then((r) =>
    r.data.reduce<Misc[]>((acc, misc) => {
      const mapped = mapResponseMiscToEntity(misc);
      if (mapped) {
        acc.push(mapped);
      }
      return acc;
    }, []),
  );
