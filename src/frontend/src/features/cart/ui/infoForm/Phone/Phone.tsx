import React, { ChangeEvent, FC, useState } from 'react';
import { TextBox } from '@shared/ui/components';

type PhoneProps = {};

export const Phone: FC<PhoneProps> = ({}) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextBox
      title="Контактный телефон:"
      value={value}
      onChange={handleChange}
      placeholder="+7 999-999-99-99"
      name="tel"
      bigLabel
    />
  );
};
