import React, { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import PersonalDataComponent from '../personal-data-component/personal-data-component';
import SymptomsDataComponent from '../symptoms-data-component/symptoms-data-component';
import PathologiesDataComponent from '../pathologies-data-component/pathologies-data-component';
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper
} from '@material-ui/core';

import ResultComponent from '../result-component/result-component';

import { TelephoneMessageValues } from '../../common/types';
import { initialValues } from './form-model/form-initial-values';
import validationSchema from './form-model/form-validation-schema';

import styles from './telephome-message-form.module.scss';

const steps = ['Персональні данні', 'Симптоми', 'Додаткові патології'];
const COUNTER = 1;

const TelephoneMessageForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const isLastStep = activeStep === steps.length - COUNTER;
  const currentValidationSchema = validationSchema[activeStep];

  const sendData = async (values: TelephoneMessageValues) => {
    console.log('submit');
    console.log(values);
    // TODO store to local storage
    // TODO send request to metacom
  };

  const submitHandler = async (
    values: any,
    helpers: FormikHelpers<any>
  ): Promise<void> => {
    if (isLastStep) {
      await sendData(values);
      setCompleted(true);
    } else {
      console.log(values);
      setActiveStep(activeStep + COUNTER);
      helpers.setTouched({});
      helpers.setSubmitting(false);
    }
  };

  const handleBack = (): void => {
    setActiveStep(activeStep - COUNTER);
  };

  const renderStepContent = (step: number): React.ReactElement => {
    const components: React.ReactElement[] = [
      <PersonalDataComponent key={0} />,
      <SymptomsDataComponent key={1} />,
      <PathologiesDataComponent key={2} />
    ];
    return components[step];
  };

  return (
    <React.Fragment>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={activeStep > index || completed}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <ResultComponent />
        ) : (
          <Formik
            initialValues={initialValues}
            //validationSchema={currentValidationSchema}
            onSubmit={submitHandler}
          >
            {({ isSubmitting, values }) => {
              console.log(values);
              return (
                <Form>
                  {renderStepContent(activeStep)}
                  <div className={styles.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={styles.button}>
                        Назад
                      </Button>
                    )}
                    <div className={styles.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={styles.button}
                      >
                        {isLastStep ? 'Надіслати' : 'Далі'}
                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={styles.buttonProgress}
                        />
                      )}
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default TelephoneMessageForm;
