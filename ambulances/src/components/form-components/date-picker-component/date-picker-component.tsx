import React, { FC, useEffect, useState } from 'react';
import { useField } from 'formik';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import DateFnsUtils from '@date-io/date-fns';

const DatePickerComponent: FC<Props> = ({
  name,
  minDate = new Date('2020/01/01'),
  maxDate = new Date(),
  onBlur
}) => {
  const [field, meta, helper] = useField({ name });
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && Boolean(error) && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState<Date>();

  console.log(value);
  useEffect((): void => {
    if (value) {
      setSelectedDate(value);
    }
  }, [value]);

  const onChange = (date: MaterialUiPickersDate): void => {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        {...field}
        value={selectedDate}
        onChange={onChange}
        error={isError}
        invalidDateMessage={isError && error}
        helperText={isError && error}
        minDate={minDate}
        maxDate={maxDate}
        onBlur={onBlur}
      />
    </MuiPickersUtilsProvider>
  );
};

type Props = {
  name: string;
  label: string;
  format?: string;
  views?: string[];
  minDate?: Date;
  maxDate?: Date;
  onBlur?: () => void;
};

export default DatePickerComponent;
