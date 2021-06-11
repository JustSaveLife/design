import React, { FC, useState } from 'react';
import { Container, Box, TextField, Button, Grid } from '@material-ui/core';
import { FormikValues } from 'formik/dist/types';
import formDataModel from '../telephone-message-form/form-model/form-model';

import styles from './personal-data-component.module.scss';
import InputComponent from '../form-components/input-component/input-component';
import SelectComponent from '../form-components/select-component/select-component';
import DatePickerComponent from '../form-components/date-picker-component/date-picker-component';

const PersonalDataComponent: FC<FormikValues> = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    personalDataFields: {
      firstName,
      lastName,
      patronymic,
      age,
      weight,
      gender,
      fillingTime,
      episodeStartTime
    }
  } = formDataModel;

  const genderOptions = [
    {
      label: 'Чоловічий',
      value: 'man'
    },
    {
      label: 'Жіночий',
      value: 'female'
    }
  ];

  const renderFillingTime = (): React.ReactElement =>
    isEditing ? (
      <>
        {/*<TextField
          name={fillingTime.name}
          label={fillingTime.label}
          type="datetime-local"
          className={styles.textField}
          InputLabelProps={{
            shrink: true
          }}
          onBlur={() => setIsEditing(false)}
        />*/}
        <DatePickerComponent
          name={fillingTime.name}
          label={fillingTime.label}
          onBlur={() => setIsEditing(false)}
        />
      </>
    ) : (
      <>
        {/*<TextField
          name={fillingTime.name}
          label={fillingTime.label}
          InputProps={{
            readOnly: true
          }}
        />*/}
        <InputComponent
          label={fillingTime.label}
          name={fillingTime.name}
          required={true}
        />
        <Button
          onClick={() => setIsEditing(true)}
          className={styles.editButton}
        >
          Редагувати
        </Button>
      </>
    );

  return (
    <Container>
      <Box className={styles.timeFilling}>{renderFillingTime()}</Box>
      <Grid>
        <InputComponent
          label={lastName.label}
          name={lastName.name}
          required={true}
        />
        <InputComponent
          label={firstName.label}
          name={firstName.name}
          required={true}
        />
        <InputComponent
          label={patronymic.label}
          name={patronymic.name}
          required={true}
        />
        <InputComponent label={age.label} name={age.name} required={true} />
        <InputComponent
          label={weight.label}
          name={weight.name}
          required={true}
        />
        <SelectComponent
          label={gender.label}
          name={gender.name}
          data={genderOptions}
          required={true}
        />
      </Grid>
      <Box>
        <TextField
          name={episodeStartTime.name}
          label={episodeStartTime.label}
          type="datetime-local"
          className={styles.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Box>
    </Container>
  );
};

export default PersonalDataComponent;
