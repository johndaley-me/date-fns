import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  abbreviated: ['KM', 'TS'],
  narrow: ['KM', 'TS'],
  wide: ['ki muʻa', 'taʻu ʻo Sīsū']
}

var quarterValues = {
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  narrow: ['1', '2', '3', '4'],
  wide: ['kuata 1', 'kuata 2', 'kuata 3', 'kuata 4']
}

var formattingQuarterValues = {
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  narrow: ['1', '2', '3', '4'],
  wide: ['kuata ʻuluaki', 'kuata ua', 'kuata tolu', 'kuata fā']
}

var monthValues = {
  abbreviated: [
    'Sān',
    'Fēp',
    'Maʻa',
    'ʻEpe',
    'Mē',
    'Sun',
    'Siu',
    'ʻAok',
    'Sep',
    'ʻOka',
    'Nōv',
    'Tīs'
  ],
  narrow: ['S', 'F', 'M', 'E', 'M', 'S', 'S', 'A', 'S', 'O', 'N', 'T'],
  wide: [
    'Sānuali',
    'Fēpueli',
    'Maʻasi',
    'ʻEpeleli',
    'Mē',
    'Sune',
    'Siulai',
    'ʻAokosi',
    'Sepitema',
    'ʻOkatopa',
    'Nōvema',
    'Tīsema'
  ]
}

var formattingMonthValues = monthValues

var dayValues = {
  abbreviated: ['Sāp', 'Mōn', 'Tūs', 'Pul', 'Tuʻa', 'Fal', 'Tok'],
  narrow: ['S', 'M', 'T', 'P', 'T', 'F', 'T'],
  short: ['Sāp', 'Mōn', 'Tūs', 'Pul', 'Tuʻa', 'Fal', 'Tok'],
  wide: [
    'Sāpate',
    'Mōnite',
    'Tūsite',
    'Pulelulu',
    'Tuʻapulelulu',
    'Falaite',
    'Tokonaki'
  ]
}

var formattingDayValues = dayValues

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
}

var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
}

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
