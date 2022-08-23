import { Dough, DoughType } from '@entities/pizza/model/dough';

const doughIdsToType: Record<number, DoughType> = {
  1: 'light',
  2: 'large',
};

export interface ResponseDough {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

export const mapResponseDoughToEntity = ({
  id,
  name,
  price,
  description,
}: ResponseDough): Dough | null => {
  const type = doughIdsToType[id];

  if (!type) {
    return null;
  }

  return {
    id,
    name,
    price,
    type,
    description,
  };
};