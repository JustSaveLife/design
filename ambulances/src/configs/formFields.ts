export const MOZOK_SYMPTOMS = [
  {
    name: 'speech',
    label: 'Мовлення',
    items: ['так', 'ні']
  },
  {
    name: 'eyes',
    label: 'Очна девіація',
    items: ['так', 'ні']
  },
  {
    name: 'denialBodyPart',
    label: 'Заперечення однієї частини тіла',
    items: ['так', 'ні']
  },
  {
    name: 'face',
    label: 'Обличчя',
    items: ['ліва', 'права', 'обидві']
  },
  {
    name: 'limbsUpper',
    label: 'Кінцівки (верхня)',
    items: ['ліва', 'права', 'обидві']
  },
  {
    name: 'limbsLower',
    label: 'Кінцівки (нижня)',
    items: ['ліва', 'права', 'обидві']
  }
];

export const SCALE_KOM_GLAZGO = {
  name: 'scale',
  questions: [
    {
      name: 'scaleQuestion1',
      label: 'Відкривання очей:',
      options: [
        'Відсутнє',
        'У відповідь на біль',
        'У відповідь на мову',
        'Спонтанне'
      ]
    },
    {
      name: 'scaleQuestion2',
      label: 'Відкривання очей:',
      options: [
        'Відсутнє',
        'Розгинальна відповідь',
        'Згинальна відповідь',
        'Відсмикування',
        'Локалізація болю',
        'Виконання команд'
      ]
    },
    {
      name: 'scaleQuestion3',
      label: 'Відкривання очей:',
      options: [
        'Відсутнє',
        'Нечленороздільна відповідь',
        'Недоречна відповідь',
        'Сплутаність мови',
        'Орієнтована відповідь'
      ]
    }
  ]
};

export const PATHOLOGIES = [
  {
    label: 'Фібриляція передсердь',
    name: 'atrialFibrillation',
    items: ['так', 'ні']
  },
  {
    label: 'Цукровий діабет',
    name: 'diabetes',
    items: ['так', 'ні']
  },
  {
    label: 'Серцева недостатність',
    name: 'heartFailure',
    items: ['так', 'ні']
  },
  {
    label: 'Деменція',
    name: 'dementia',
    items: ['так', 'ні']
  },
  {
    label: 'Операції, кровотечі(за 3 міс.) ',
    name: 'operations',
    items: ['так', 'ні']
  },
  {
    label: 'Онкопатологія',
    name: 'oncopathology',
    items: ['так', 'ні']
  }
];

export const MEASUREMENT = [
  {
    label: 'Артиріальний тиск',
    name: 'bloodPressure'
  },
  {
    label: 'Рівень цукру крові',
    name: 'sugarLevel'
  },
  {
    label: 'ЕКГ',
    name: 'ekg'
  },
  {
    label: 'Температура тіла',
    name: 'bodyDegree'
  },
  {
    label: 'Примітки',
    name: 'notes'
  }
];

export const PREPARATIONS = {
  name: 'preparations',
  options: [
    'Антагоністи Вітаміну К (варфарин, сінкумар і т.д.)',
    'Рівороксабан (Ксарелто)',
    'Добігатран (Продакса)',
    'Апіксабан (Еліквіс)',
    'Гепарини'
  ]
};
