import React, { FC, useState } from 'react';
import { Sauce } from '@features/constructor/ingredients/Sauce/Sauce';
import style from './SauceRow.module.scss';

type SauceRowProps = {};

export const SauceRow: FC<SauceRowProps> = ({}) => {
  const [sauce, setSauce] = useState<'tomato' | 'creamy'>('tomato');

  const handleSauceChanged = (type: 'tomato' | 'creamy') => {
    setSauce(type);
  };

  return (
    <div className={style.ingredients__sauce}>
      <p>Основной соус:</p>

      <Sauce type="tomato"
             title="Томатный"
             onChange={() => handleSauceChanged('tomato')}
             checked={sauce === 'tomato'} />
      <Sauce type="creamy"
             title="Сливочный"
             onChange={() => handleSauceChanged('creamy')}
             checked={sauce === 'creamy'} />
    </div>
  );
};