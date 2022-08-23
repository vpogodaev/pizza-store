import { Size, SizeType } from '@entities/pizza/model/size';

const sizeIdsToType: Record<number, SizeType> = {
  1: 'small',
  2: 'normal',
  3: 'big',
};

export interface ResponseSize {
  id: number;
  name: string;
  image: string;
  multiplier: number;
}

export const mapResponseSizeToEntity = ({
  id,
  name,
  multiplier,
}: ResponseSize): Size | null => {
  const type = sizeIdsToType[id];

  if (!type) {
    return null;
  }

  return {
    id,
    name,
    multiplier,
    type,
  };
};