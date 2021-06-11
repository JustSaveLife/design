import React, { FC } from 'react';
import { at } from 'lodash';
import { Box, TextField } from '@material-ui/core';
import { useField } from 'formik';

const InputComponent: FC<Props> = ({ label, name, required, className }) => {
  const [field, meta] = useField({ name });

  const renderHelperText = (): React.ReactNode => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  };

  return (
    <Box>
      <TextField
        type="text"
        label={label}
        required={required}
        className={className}
        helperText={renderHelperText()}
        {...field}
      />
    </Box>
  );
};

type Props = {
  label: string;
  name: string;
  required: boolean;
  className?: string;
};

export default InputComponent;
