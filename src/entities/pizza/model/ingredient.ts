type IngredientType = 'ananas'
  | 'bacon'
  | 'blueCheese'
  | 'cheddar'
  | 'chile'
  | 'ham'
  | 'jalapeno'
  | 'mozzarella'
  | 'mushrooms'
  | 'olives'
  | 'onion'
  | 'parmesan'
  | 'salami'
  | 'salmon'
  | 'tomatoes';

export type Ingredient = {
  name: string;
  price: number;
  type: IngredientType;
}