export type FormFieldData = {
  name: string;
  label: string;
  requiredErrorMsg?: string;
};

export type PersonalDataFields = {
  firstName: FormFieldData;
  lastName: FormFieldData;
  patronymic: FormFieldData;
  age: FormFieldData;
  weight: FormFieldData;
  gender: FormFieldData;
  fillingTime: FormFieldData;
  episodeStartTime: FormFieldData;
};

export type SymptomFields = {
  speech: FormFieldData;
  eyes: FormFieldData;
  denialBodyPart: FormFieldData;
  face: FormFieldData;
  limbsUpper: FormFieldData;
  limbsLower: FormFieldData;
  scale: FormFieldData;
  scaleQuestion1: FormFieldData;
  scaleQuestion2: FormFieldData;
  scaleQuestion3: FormFieldData;
};

export type PathologyFields = {
  atrialFibrillation: FormFieldData;
  diabetes: FormFieldData;
  heartFailure: FormFieldData;
  dementia: FormFieldData;
  operations: FormFieldData;
  oncopathology: FormFieldData;
  bloodPressure: FormFieldData;
  sugarLevel: FormFieldData;
  ekg: FormFieldData;
  bodyDegree: FormFieldData;
  notes: FormFieldData;
  preparations: FormFieldData;
};

export type FormDataModel = {
  personalDataFields: PersonalDataFields;
  symptomFields: SymptomFields;
  pathologyFields: PathologyFields;
};

export type PersonalDataValues = {
  firstName: string;
  lastName: string;
  patronymic: string;
  age: number;
  weight: number;
  gender: string;
  fillingTime: string;
  episodeStartTime: string;
};

export type SymptomValues = {
  speech: string;
  eyes: string;
  denialBodyPart: string;
  face: string;
  limbsUpper: string;
  limbsLower: string;
  scale: number;
  scaleQuestion1: number;
  scaleQuestion2: number;
  scaleQuestion3: number;
};

export type PathologyValues = {
  atrialFibrillation: string;
  diabetes: string;
  heartFailure: string;
  dementia: string;
  operations: string;
  oncopathology: string;
  bloodPressure: string;
  sugarLevel: string;
  ekg: string;
  bodyDegree: string;
  notes: string;
  preparations: string;
};

/*export type TelephoneMessageValues = PersonalDataValues &
  SymptomValues &
  PathologyValues;*/

export type TelephoneMessageValues = { [x: string]: any };
