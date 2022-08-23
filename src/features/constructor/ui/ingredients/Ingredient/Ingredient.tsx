import React, { ChangeEventHandler, FC} from 'react';
import { Counter } from '@shared/ui/components';
import { IngredientType } from '@entities/pizza/model/ingredient';
import style from './Ingredient.module.scss';

type IngredientProps = {
  title: string;
  type: IngredientType;
  value: number;
  canAddMore: boolean;
  onPlusClicked: () => void;
  onMinusClicked: () => void;
  onValueChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Ingredient: FC<IngredientProps> = ({
  title,
  type,
  value,
  canAddMore,
  onPlusClicked,
  onMinusClicked,
  onValueChanged
}) => {
  return (
    <li className={style.ingredients__item}>
      <span className={`${style.filling} ${style[`filling--${type}`]}`}>
        {title}
      </span>

      <Counter
        value={value}
        onMinusClicked={onMinusClicked}
        onPlusClicked={onPlusClicked}
        onValueChanged={onValueChanged}
        extraClassName={style.ingredients__counter}
        plusDisabled={!canAddMore}
        minusDisabled={value <= 0}
      />
    </li>
  );
};
