import { Sauce, SauceType } from '@entities/pizza/model/sauce';

const sauceIdsToType: Record<number, SauceType> = {
  1: 'tomato',
  2: 'creamy',
};

export interface ResponseSauce {
  id: number;
  name: string;
  price: number;
}

export const mapResponseSauceToEntity = ({
  id,
  name,
  price,
}: ResponseSauce): Sauce | null => {
  const type = sauceIdsToType[id];

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
