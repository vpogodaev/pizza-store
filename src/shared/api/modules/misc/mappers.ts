import { Misc, MiscType } from '@entities/product/model/misc';

const miscIdsToType: Record<number, MiscType> = {
  1: 'cola',
  2: 'sauce',
  3: 'potato',
};

export interface ResponseMisc {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const mapResponseMiscToEntity = ({
  id,
  name,
  price,
}: ResponseMisc): Misc | null => {
  const type = miscIdsToType[id];

  if (!type) {
    return null;
  }

  return {
    id,
    name,
    price,
    type,
  };
};
