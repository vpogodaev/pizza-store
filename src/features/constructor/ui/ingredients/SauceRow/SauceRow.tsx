import React, { FC } from 'react';
import { Sauce } from '@features/constructor/ui/ingredients/Sauce/Sauce';
import { $sauces, Sauce as TSauce } from '@entities/pizza/model/sauce';
import { useStore } from 'effector-react';
import {
  $pizzaConstructor,
  chosenSauce,
} from '@features/constructor/model/pizzaConstructor';
import style from './SauceRow.module.scss';

type SauceRowProps = {};

export const SauceRow: FC<SauceRowProps> = ({}) => {
  const sauces = useStore($sauces);
  const currentSauce = useStore($pizzaConstructor).sauce;

  const handleSauceChanged = (sauce: TSauce) => {
    chosenSauce(sauce);
  };

  const saucesToRender = sauces.map((s) => (
    <Sauce
      title={s.name}
      onChange={() => handleSauceChanged(s)}
      checked={s.type === currentSauce?.type}
      key={s.id}
    />
  ));

  return (
    <div className={style.ingredients__sauce}>
      <p>Основной соус:</p>

      {saucesToRender}
    </div>
  );
};
