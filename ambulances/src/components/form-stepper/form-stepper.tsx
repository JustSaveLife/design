import React, { useState } from 'react';
import {
  Formik,
  Form,
  FormikConfig,
  FormikValues,
  FormikHelpers
} from 'formik';
import {
  StepLabel,
  Stepper,
  Step,
  Grid,
  Button,
  CircularProgress
} from '@material-ui/core';

const FormStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormStepProps
  >[];
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const isLastStep = () => step === childrenArray.length - 1;
  const isFirstStep = () => step === 0;
  const currentChild = childrenArray[step];
  console.log(currentChild);
  const onSubmit = async (
    values: FormikValues,
    helpers: FormikHelpers<FormikValues>
  ) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
      setCompleted(true);
    }

    setStep(step + 1);
    helpers.setTouched({});
  };

  return (
    <Formik
      {...props}
      //validationSchema={currentChild.props.validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {children}

          <Grid container spacing={2}>
            {isFirstStep() ? null : (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(s => s - 1)}
                >
                  Назад
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Button
              startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
              disabled={isSubmitting}
              variant="contained"
              color="primary"
              type="submit"
            >
              {isSubmitting
                ? 'Надсилається'
                : isLastStep()
                ? 'Надіслати'
                : 'Далі'}
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export type FormStepProps = Pick<
  FormikConfig<FormikValues>,
  'children' | 'validationSchema'
> & { label: string };

export default FormStepper;
