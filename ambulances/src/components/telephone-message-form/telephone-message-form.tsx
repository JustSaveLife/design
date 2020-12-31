import React from 'react';
import FormStepper from '../form-stepper/form-stepper';
import PersonalDataComponent from '../personal-data-component/personal-data-component';
import SymptomsDataComponent from '../symptoms-data-component/symptoms-data-component';
import PathologiesDataComponent from '../pathologies-data-component/pathologies-data-component';

const TelephoneMessageForm = () => {
  const submitHandler = async (values: any) => {
    console.log(values);
    // store to local storage
    // send request to metacom
  };
  return (
    <FormStepper
      initialValues={{
        fillingTime: new Date(),
        surname: '',
        name: '',
        patronymic: '',
        age: '',
        gender: '',
        weight: ''
      }}
      onSubmit={submitHandler}
    >
      <PersonalDataComponent />
      <SymptomsDataComponent />
      <PathologiesDataComponent />
    </FormStepper>
  );
};

export default TelephoneMessageForm;
