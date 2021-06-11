import React, { FC } from 'react';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  TextField
} from '@material-ui/core';
import {
  MEASUREMENT,
  PATHOLOGIES,
  PREPARATIONS
} from '../../configs/formFields';
import RadioCheckboxContainer from '../form-components/radio-checkbox-component/radio-checkbox-component';
import InputComponent from '../form-components/input-component/input-component';

const PathologiesDataComponent: FC = () => {
  return (
    <Container>
      <Box>
        {PATHOLOGIES.map(({ name, label, items }) => (
          <RadioCheckboxContainer
            key={label}
            name={name}
            items={items}
            label={label}
          />
        ))}
      </Box>
      <Box>
        {MEASUREMENT.map(({ name, label }) => (
          <InputComponent
            key={label}
            label={label}
            name={name}
            required={false}
          />
        ))}
      </Box>
      <Box>
        {PREPARATIONS.options.map(option => (
          <FormControlLabel
            key={option}
            control={<Checkbox name={name} color="primary" />}
            label={option}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PathologiesDataComponent;
