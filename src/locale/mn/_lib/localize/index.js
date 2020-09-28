import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  abbreviated: ['МЭӨ', 'МЭ'],
  narrow: ['МЭӨ', 'МЭ'],
  wide: ['манай эриний өмнөх', 'манай эриний']
}

var quarterValues = {
  abbreviated: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
  narrow: ['I', 'II', 'III', 'IV'],
  wide: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал']
}

var formattingQuarterValues = quarterValues

var monthValues = {
  abbreviated: [
    '1-р сар',
    '2-р сар',
    '3-р сар',
    '4-р сар',
    '5-р сар',
    '6-р сар',
    '7-р сар',
    '8-р сар',
    '9-р сар',
    '10-р сар',
    '11-р сар',
    '12-р сар'
  ],
  narrow: [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
  ],
  wide: [
    'Нэгдүгээр сар',
    'Хоёрдугаар сар',
    'Гуравдугаар сар',
    'Дөрөвдүгээр сар',
    'Тавдугаар сар',
    'Зургаадугаар сар',
    'Долоодугаар сар',
    'Наймдугаар сар',
    'Есдүгээр сар',
    'Аравдугаар сар',
    'Арван нэгдүгээр сар',
    'Арван хоёрдугаар сар'
  ]
}

var formattingMonthValues = {
  abbreviated: [
    '1-р сар',
    '2-р сар',
    '3-р сар',
    '4-р сар',
    '5-р сар',
    '6-р сар',
    '7-р сар',
    '8-р сар',
    '9-р сар',
    '10-р сар',
    '11-р сар',
    '12-р сар'
  ],
  narrow: [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
  ],
  wide: [
    'нэгдүгээр сар',
    'хоёрдугаар сар',
    'гуравдугаар сар',
    'дөрөвдүгээр сар',
    'тавдугаар сар',
    'зургаадугаар сар',
    'долоодугаар сар',
    'наймдугаар сар',
    'есдүгээр сар',
    'аравдугаар сар',
    'арван нэгдүгээр сар',
    'арван хоёрдугаар сар'
  ]
}

var dayValues = {
  abbreviated: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  narrow: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  wide: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']
}

var formattingDayValues = {
  abbreviated: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  narrow: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  wide: ['ням', 'даваа', 'мягмар', 'лхагва', 'пүрэв', 'баасан', 'бямба']
}

var dayPeriodValues = {
  abbreviated: {
    afternoon: 'өдөр',
    am: 'ү.ө.',
    evening: 'орой',
    midnight: 'шөнө дунд',
    morning: 'өглөө',
    night: 'шөнө',
    noon: 'үд дунд',
    pm: 'ү.х.'
  },
  narrow: {
    afternoon: 'өдөр',
    am: 'ү.ө.',
    evening: 'орой',
    midnight: 'шөнө дунд',
    morning: 'өглөө',
    night: 'шөнө',
    noon: 'үд дунд',
    pm: 'ү.х.'
  },
  wide: {
    afternoon: 'өдөр',
    am: 'ү.ө.',
    evening: 'орой',
    midnight: 'шөнө дунд',
    morning: 'өглөө',
    night: 'шөнө',
    noon: 'үд дунд',
    pm: 'ү.х.'
  }
}

var formattingDayPeriodValues = dayPeriodValues

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  return dirtyNumber
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    formattingValues: formattingQuarterValues,
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
