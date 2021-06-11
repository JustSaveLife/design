import { FormDataModel } from '../../../common/types';

const formDataModel: FormDataModel = {
  personalDataFields: {
    firstName: {
      name: 'firstName',
      label: `Ім'я`,
      requiredErrorMsg: `Ім'я - обов'язкове поле`
    },
    lastName: {
      name: 'lastName',
      label: 'Прізвище',
      requiredErrorMsg: `Прізвище - обов'язкове поле`
    },
    patronymic: {
      name: 'patronymic',
      label: 'По-батькові',
      requiredErrorMsg: `По-батькові - обов'язкове поле`
    },
    age: {
      name: 'age',
      label: 'Вік',
      requiredErrorMsg: `Вік - обов'язкове поле`
    },
    weight: {
      name: 'weight',
      label: 'Вага',
      requiredErrorMsg: `Вага - обов'язкове поле`
    },
    gender: {
      name: 'gender',
      label: 'Стать',
      requiredErrorMsg: `Стать - обов'язкове поле`
    },
    fillingTime: {
      name: 'fillingTime',
      label: 'Час заповнення',
      requiredErrorMsg: `Час заповнення - обов'язкове поле`
    },
    episodeStartTime: {
      name: 'episodeStartTime',
      label: 'Час початку епізоду',
      requiredErrorMsg: `Час початку епізоду - обов'язкове поле`
    }
  },
  symptomFields: {
    speech: {
      name: 'speech',
      label: 'Мовлення',
      requiredErrorMsg: `Мовлення - обов'язкове поле`
    },
    eyes: {
      name: 'eyes',
      label: 'Очна девіація',
      requiredErrorMsg: `Очна девіація - обов'язкове поле`
    },
    denialBodyPart: {
      name: 'denialBodyPart',
      label: 'Заперечення однієї частини тіла',
      requiredErrorMsg: `Заперечення однієї частини тіла - обов'язкове поле`
    },
    face: {
      name: 'face',
      label: 'Обличчя'
    },
    limbsUpper: {
      name: 'limbsUpper',
      label: 'Кінцівки (верхня)'
    },
    limbsLower: {
      name: 'limbsLower',
      label: 'Кінцівки (нижня)'
    },
    scale: {
      name: 'scale',
      label: 'Шкала коми Глазго',
      requiredErrorMsg: `Оцінювання по Шкалі коми Глазго обов'язкове`
    },
    scaleQuestion1: {
      name: 'scaleQuestion1',
      label: 'Відкривання очей'
    },
    scaleQuestion2: {
      name: 'scaleQuestion2',
      label: 'Рухова відповідь'
    },
    scaleQuestion3: {
      name: 'scaleQuestion3',
      label: 'Мовна відповідь'
    }
  },
  pathologyFields: {
    atrialFibrillation: {
      name: 'atrialFibrillation',
      label: 'Фібриляція передсердь',
      requiredErrorMsg: `Фібриляція передсердь - обов'язкове поле`
    },
    diabetes: {
      label: 'Цукровий діабет',
      name: 'diabetes',
      requiredErrorMsg: `Цукровий діабет - обов'язкове поле`
    },
    heartFailure: {
      label: 'Серцева недостатність',
      name: 'heartFailure'
    },
    dementia: {
      label: 'Деменція',
      name: 'dementia'
    },
    operations: {
      label: 'Операції, кровотечі(за 3 міс.)',
      name: 'operations'
    },
    oncopathology: {
      label: 'Онкопатологія',
      name: 'oncopathology'
    },
    bloodPressure: {
      label: 'Артиріальний тиск',
      name: 'bloodPressure'
    },
    sugarLevel: {
      label: 'Рівень цукру крові',
      name: 'sugarLevel'
    },
    ekg: {
      label: 'ЕКГ',
      name: 'ekg'
    },
    bodyDegree: {
      label: 'Температура тіла',
      name: 'bodyDegree'
    },
    notes: {
      label: 'Примітки',
      name: 'notes'
    },
    preparations: {
      label: 'Ци вживає наступні препарати',
      name: 'preparations'
    }
  }
};

export default formDataModel;
