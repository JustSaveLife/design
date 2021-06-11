import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';

import { SCALE_KOM_GLAZGO } from '../../configs/formFields';

const DEFAULT_VALUES = {
  result: 3,
  item: 1
};

const ScaleComponent: React.FC = () => {
  const [scaleValue, setScale] = useState(DEFAULT_VALUES.result);
  const [optionScaleValue1, setOptionScale1] = useState(DEFAULT_VALUES.item);
  const [optionScaleValue2, setOptionScale2] = useState(DEFAULT_VALUES.item);
  const [optionScaleValue3, setOptionScale3] = useState(DEFAULT_VALUES.item);

  const setScaleValue = (event: any) => {
    const { value = 0, name = '' } = event.target;
    let resultScale = optionScaleValue1 + optionScaleValue2 + optionScaleValue3;
    switch (name) {
      case 'optionScaleValue1': {
        setOptionScale1(value);
        resultScale -= optionScaleValue1;
        break;
      }
      case 'optionScaleValue2': {
        setOptionScale2(value);
        resultScale -= optionScaleValue2;
        break;
      }
      case 'optionScaleValue3': {
        setOptionScale3(value);
        resultScale -= optionScaleValue3;
        break;
      }
    }

    resultScale += value;
    setScale(resultScale);
  };

  return (
    <Box>
      <FormLabel component="legend">Шкала ком Глазго</FormLabel>
      <FormGroup>
        {SCALE_KOM_GLAZGO.questions.map(({ name, label, options }) => (
          <div className="select-container wrapper" key={name}>
            <Select name={name} onChange={setScaleValue}>
              <InputLabel>{label}</InputLabel>
              {options.map((option, i) => (
                <MenuItem key={option} value={i++}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <FormControl>
          <InputLabel>Результат:</InputLabel>
          <TextField
            id={SCALE_KOM_GLAZGO.name}
            name={SCALE_KOM_GLAZGO.name}
            value={scaleValue}
          />
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default ScaleComponent;
