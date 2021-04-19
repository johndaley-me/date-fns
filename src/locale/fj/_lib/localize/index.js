import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['BC', 'AD'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}

var monthValues = {
  narrow: [
    'Janu.',
    'Fepe.',
    'Maj.',
    'Epe.',
    'Me',
    'Jun.',
    'Jul.',
    'Oks.',
    'Sepi.',
    'Okot.',
    'Nov.',
    'Tise.'
  ],
  abbreviated: [
    'Janu.',
    'Fepe.',
    'Maj.',
    'Epe.',
    'Me',
    'Jun.',
    'Jul.',
    'Oks.',
    'Sepi.',
    'Okot.',
    'Nov.',
    'Tise.'
  ],
  wide: [
    'Janueri',
    'Feperuari',
    'Maji',
    'Epereli',
    'Me',
    'June',
    'Julai',
    'Okosita',
    'Sepiteba',
    'Okotova',
    'Noveba',
    'Tiseba'
  ]
}

var dayValues = {
  narrow: [
    'Sigatabu',
    'Moniti',
    'Tusiti',
    'Vukelulu',
    'Lotulevu',
    'Vakaraubuka',
    'Vakarauwai'
  ],
  short: [
    'Sigatabu',
    'Moniti',
    'Tusiti',
    'Vukelulu',
    'Lotulevu',
    'Vakaraubuka',
    'Vakarauwai'
  ],
  abbreviated: [
    'Sigatabu',
    'Moniti',
    'Tusiti',
    'Vukelulu',
    'Lotulevu',
    'Vakaraubuka',
    'Vakarauwai'
  ],
  wide: [
    'Sigatabu',
    'Moniti',
    'Tusiti',
    'Vukelulu',
    'Lotulevu',
    'Vakaraubuka',
    'Vakarauwai'
  ]
}

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
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
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
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize