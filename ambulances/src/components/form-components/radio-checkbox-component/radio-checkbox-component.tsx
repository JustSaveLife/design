import React, { FC } from 'react';

const RadioCheckboxContainer: FC<Props> = ({ name, items, label }) => {
  return (
    <div className="checkbox-list wrapper">
      {label}
      {items.map(item => (
        <label className="checkbox-items-label" key={item}>
          {item}
          <input type="radio" name={name} value={`${item}: ${item}`} />
        </label>
      ))}
    </div>
  );
};

type Props = {
  name: string;
  items: string[];
  label: string;
};

export default RadioCheckboxContainer;
