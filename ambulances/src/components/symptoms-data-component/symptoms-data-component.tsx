import React from 'react';
import { Container, Box } from '@material-ui/core';

import { MOZOK_SYMPTOMS } from '../../configs/formFields';

import ScaleComponent from '../scale-component/scale-component';
import RadioCheckboxContainer from '../form-components/radio-checkbox-component/radio-checkbox-component';

const SymptomsDataComponent = () => {
  return (
    <Container>
      <ScaleComponent />
      {MOZOK_SYMPTOMS.map(({ name, label, items }) => (
        <Box key={label}>
          <RadioCheckboxContainer name={name} items={items} label={label} />
        </Box>
      ))}
    </Container>
  );
};

export default SymptomsDataComponent;
