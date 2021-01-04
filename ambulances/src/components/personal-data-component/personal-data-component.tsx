import React, { FC, useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem
} from '@material-ui/core';
import { FormikValues } from 'formik/dist/types';

import styles from './personal-data-component.module.scss';

const PersonalDataComponent: FC<FormikValues> = ({
  handleChange
}: FormikValues) => {
  const [isEditing, setIsEditing] = useState(false);

  const renderFillingTime = (): React.ReactElement =>
    isEditing ? (
      <>
        <TextField
          name="fillingTime"
          label="Час заповнення"
          type="datetime-local"
          className={styles.textField}
          InputLabelProps={{
            shrink: true
          }}
          onBlur={() => setIsEditing(false)}
        />
      </>
    ) : (
      <>
        <TextField
          name="fillingTime"
          label="Час заповнення"
          InputProps={{
            readOnly: true
          }}
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
      <Box>
        <TextField label="Прізвище" name="surname" required={true} />
      </Box>
      <Box>
        <TextField label="Ім'я" name="name" required={true} />
      </Box>
      <Box>
        <TextField label="По-батькові" name="patronymic" required={true} />
      </Box>
      <Grid>
        <Box>
          <TextField label="Вік" name="age" required={true} />
        </Box>
        <Box>
          <TextField label="Вага" name="weight" required={true} />
        </Box>
        <Box>
          <Select name="gender" label="Стать">
            <MenuItem value="man">Чоловічий</MenuItem>
            <MenuItem value="female">Жіночий</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Box>
        <TextField
          name="fillingTime"
          label="Час початку епізоду"
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
