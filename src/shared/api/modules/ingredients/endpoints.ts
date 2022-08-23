import { api } from '@shared/api/client/api';
import { ResponseIngredient } from '@shared/api/modules/ingredients/mappers';

export const getIngredients = async () =>
  await api.get<ResponseIngredient[]>('ingredients').then((r) => r);
