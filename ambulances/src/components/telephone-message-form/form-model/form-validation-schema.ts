import * as Yup from 'yup';
import {
  PathologyValues,
  PersonalDataValues,
  SymptomValues
} from '../../../common/types';

export default [
  Yup.object().shape<PersonalDataValues>({
    firstName: Yup.string()
      .trim()
      .required(),
    lastName: Yup.string()
      .trim()
      .required(),
    patronymic: Yup.string()
      .trim()
      .required(),
    age: Yup.number()
      .positive()
      .integer()
      .required(),
    weight: Yup.number()
      .positive()
      .required(),
    gender: Yup.string()
      .trim()
      .required(),
    fillingTime: Yup.string().required(),
    episodeStartTime: Yup.string().required()
  }),
  Yup.object().shape<SymptomValues>({
    speech: Yup.string()
      .trim()
      .required(),
    eyes: Yup.string()
      .trim()
      .required(),
    denialBodyPart: Yup.string()
      .trim()
      .required(),
    face: Yup.string()
      .trim()
      .required(),
    limbsUpper: Yup.string()
      .trim()
      .required(),
    limbsLower: Yup.string()
      .trim()
      .required(),
    scale: Yup.number()
      .integer()
      .min(3)
      .max(15)
      .required(),
    scaleQuestion1: Yup.number()
      .min(1)
      .max(4)
      .required(),
    scaleQuestion2: Yup.number()
      .min(1)
      .max(6)
      .required(),
    scaleQuestion3: Yup.number()
      .min(1)
      .max(5)
      .required()
  }),
  Yup.object().shape<PathologyValues>({
    atrialFibrillation: Yup.string()
      .trim()
      .required(),
    diabetes: Yup.string()
      .trim()
      .required(),
    heartFailure: Yup.string()
      .trim()
      .required(),
    dementia: Yup.string()
      .trim()
      .required(),
    operations: Yup.string()
      .trim()
      .required(),
    oncopathology: Yup.string()
      .trim()
      .required(),
    bloodPressure: Yup.string()
      .trim()
      .required(),
    sugarLevel: Yup.string()
      .trim()
      .required(),
    ekg: Yup.string()
      .trim()
      .required(),
    bodyDegree: Yup.string()
      .trim()
      .required(),
    notes: Yup.string()
      .trim()
      .required(),
    preparations: Yup.string()
      .trim()
      .required()
  })
];
