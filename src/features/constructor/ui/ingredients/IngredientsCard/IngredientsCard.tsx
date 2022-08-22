import React, { FC } from 'react';
import { Sheet } from '@shared/ui/components';
import { SauceRow } from '@features/constructor/ui/ingredients/SauceRow/SauceRow';
import { Ingredient } from '@features/constructor/ui/ingredients/Ingredient/Ingredient';
import style from './IngredientsCard.module.scss';

type IngredientsCardProps = {};

const ingredients: {
  type:
    | 'ananas'
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
  title: string;
}[] = [
  {
    type: 'mushrooms',
    title: 'Грибы',
  },
  {
    type: 'cheddar',
    title: 'Чеддер',
  },
  {
    type: 'salami',
    title: 'Салями',
  },
  {
    type: 'ham',
    title: 'Ветчина',
  },
  {
    type: 'ananas',
    title: 'Ананас',
  },
  {
    type: 'bacon',
    title: 'Бекон',
  },
  {
    type: 'onion',
    title: 'Лук',
  },
  {
    type: 'chile',
    title: 'Чили',
  },
  {
    type: 'jalapeno',
    title: 'Халапеньо',
  },
  {
    type: 'olives',
    title: 'Маслины',
  },
  {
    type: 'tomatoes',
    title: 'Томаты',
  },
  {
    type: 'salmon',
    title: 'Лосось',
  },
  {
    type: 'mozzarella',
    title: 'Моцарелла',
  },
  {
    type: 'parmesan',
    title: 'Пармезан',
  },

  {
    type: 'blueCheese',
    title: 'Блю чиз',
  },
];

export const IngredientsCard: FC<IngredientsCardProps> = ({}) => {
  const ingredientsToRender = ingredients.map((i) => (
    <Ingredient
      title={i.title}
      type={i.type}
      key={i.type}
    />
  ));

  return (
    <div className={style.content__ingredients}>
      <Sheet title="Выберите ингредиенты">
        <SauceRow />

        <div className={style.ingredients__filling}>
          <p>Начинка:</p>

          <ul className={style.ingredients__list}>{ingredientsToRender}</ul>
        </div>
      </Sheet>
    </div>
  );
};