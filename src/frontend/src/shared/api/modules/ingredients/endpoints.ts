import { api } from '@shared/api/client/api';
import {
  mapResponseIngredientToEntity,
  ResponseIngredient,
} from '@shared/api/modules/ingredients/mappers';
import { Ingredient } from '@entities/pizza/model/ingredient';

export const getIngredients = async () =>
  await api.get<ResponseIngredient[]>('ingredients').then((r) =>
    r.data.reduce<Ingredient[]>((acc, ingredient) => {
      const mapped = mapResponseIngredientToEntity(ingredient);
      if (mapped) {
        acc.push(mapped);
      }
      return acc;
    }, []),
  );
