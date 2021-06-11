import { getTimeAndDate } from '../../../helpers/timeHelper';
import formDataModel from './form-model';

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

export const initialValues = {
  [fillingTime.name]: new Date(),
  [episodeStartTime.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [patronymic.name]: '',
  [age.name]: 0,
  [gender.name]: '',
  [weight.name]: 0,
  speech: '',
  eyes: '',
  denialBodyPart: '',
  face: '',
  limbsUpper: '',
  limbsLower: '',
  scale: 3,
  scaleQuestion1: 1,
  scaleQuestion2: 1,
  scaleQuestion3: 1,
  atrialFibrillation: '',
  diabetes: '',
  heartFailure: '',
  dementia: '',
  operations: '',
  oncopathology: '',
  bloodPressure: '',
  sugarLevel: '',
  ekg: '',
  bodyDegree: '',
  notes: '',
  preparations: ''
};
