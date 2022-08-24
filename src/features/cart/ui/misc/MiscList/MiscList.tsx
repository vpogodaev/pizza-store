import React, { ChangeEvent, FC } from 'react';
import { Misc } from '@features/cart/ui/misc/Misc/Misc';
import { useStore } from 'effector-react';
import {
  $miscListProduct,
  $miscProductsCount,
  addedMisc,
  removedMisc,
} from '@entities/cart/model/cart';
import { miscImg } from '@features/cart/model/miscImg';
import { $miscList, Misc as TMisc } from '@entities/product/model/misc';
import style from './MiscList.module.scss';

type MiscListProps = {};

export const MiscList: FC<MiscListProps> = ({}) => {
  const miscList = useStore($miscList);
  const miscCount = useStore($miscProductsCount);

  const handlePlusClicked = (misc: TMisc) => {
    addedMisc(misc);
  };
  const handleMinusClicked = (misc: TMisc) => {
    removedMisc(misc);
  };
  const handleCountChanged = (
    e: ChangeEvent<HTMLInputElement>,
    misc: TMisc,
  ) => {};

  const productsToRender = miscList.map((m, i) => {
    const price = `${m.price} ₽`;
    const canMinus = !Boolean(miscCount[m.type]);

    return (
      <Misc
        title={m.name}
        imgSrc={miscImg[m.type]}
        price={price}
        onMinusClicked={() => handleMinusClicked(m)}
        onPlusClicked={() => handlePlusClicked(m)}
        onCountChanged={(e) => handleCountChanged(e, m)}
        count={miscCount[m.type] || 0}
        canMinus={canMinus}
        key={i.toString()}
      />
    );
  });

  return (
    <div className={style.cart__additional}>
      <ul className={style['additional-list']}>{productsToRender}</ul>
    </div>
  );
};
