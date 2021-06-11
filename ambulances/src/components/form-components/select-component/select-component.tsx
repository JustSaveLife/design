import React, { FC } from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Box
} from '@material-ui/core';

const SelectComponent: FC<Props> = ({ name, label, data, ...rest }) => {
  const [field, meta] = useField({ name });
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;

  const renderHelperText = (): React.ReactNode => {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  };

  return (
    <Box>
      <FormControl {...rest} error={isError}>
        <InputLabel>{label}</InputLabel>
        <Select {...field} value={selectedValue ? selectedValue : ''}>
          {data.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {renderHelperText()}
      </FormControl>
    </Box>
  );
};

type Props = {
  name: string;
  label: string;
  data: { value: string; label: string }[];
  required: boolean;
  className?: string;
};

export default SelectComponent;
