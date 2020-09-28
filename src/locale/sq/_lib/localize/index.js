import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  abbreviated: ['p.K.', 'mb.K.'],
  narrow: ['p.K.', 'mb.K.'],
  wide: ['para Krishtit', 'mbas Krishtit']
}

var quarterValues = {
  abbreviated: ['Tremujori I', 'Tremujori II', 'Tremujori III', 'Tremujori IV'],
  narrow: ['1', '2', '3', '4'],
  wide: [
    'Tremujori i 1-rë',
    'Tremujori i 2-të',
    'Tremujori i 3-të',
    'Tremujori i 4-t'
  ]
}

var formattingQuarterValues = {
  abbreviated: ['tremujori I', 'tremujori II', 'tremujori III', 'tremujori IV'],
  narrow: ['1', '2', '3', '4'],
  wide: [
    'tremujori i parë',
    'tremujori i dytë',
    'tremujori i tretë',
    'tremujori i katërt'
  ]
}

var monthValues = {
  abbreviated: [
    'jan',
    'shk',
    'mar',
    'pri',
    'maj',
    'qer',
    'korr',
    'gush',
    'sht',
    'tet',
    'nën',
    'dhj'
  ],
  narrow: ['j', 'sh', 'm', 'p', 'm', 'q', 'k', 'g', 'sht', 't', 'n', 'dh'],
  wide: [
    'janar',
    'shkurt',
    'mars',
    'prill',
    'maj',
    'qershor',
    'korrik',
    'gusht',
    'shtator',
    'tetor',
    'nëntor',
    'dhjetor'
  ]
}

var dayValues = {
  abbreviated: ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht'],
  narrow: ['d', 'h', 'm', 'më', 'e', 'p', 'sh'],
  short: ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht'],
  wide: [
    'e diel',
    'e hënë',
    'e martë',
    'e mërkurë',
    'e enjte',
    'e premte',
    'e shtunë'
  ]
}

var formattingDayValues = {
  abbreviated: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
  narrow: ['d', 'h', 'm', 'm', 'e', 'p', 'sh'],
  short: ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht'],
  wide: [
    'e diel',
    'e hënë',
    'e martë',
    'e mërkurë',
    'e enjte',
    'e premte',
    'e shtunë'
  ]
}

var dayPeriodValues = {
  abbreviated: {
    afternoon: 'pasdite',
    am: 'p.d.',
    evening: 'mbrëmje',
    midnight: 'mesnatë',
    morning: 'mëngjes',
    night: 'natë',
    noon: 'mesditë',
    pm: 'm.d.'
  },
  narrow: {
    afternoon: 'pasdite',
    am: 'p.d.',
    evening: 'mbrëmje',
    midnight: 'mesnatë',
    morning: 'mëngjes',
    night: 'natë',
    noon: 'mesditë',
    pm: 'm.d.'
  },
  wide: {
    afternoon: 'pasdite',
    am: 'paradite',
    evening: 'mbrëmje',
    midnight: 'mesnatë',
    morning: 'mëngjes',
    night: 'natë',
    noon: 'mesditë',
    pm: 'pasdite'
  }
}

var formattingDayPeriodValues = {
  abbreviated: {
    afternoon: 'e pasdites',
    am: 'p.d.',
    evening: 'e mbrëmjes',
    midnight: 'e mesnatës',
    morning: 'e mëngjesit',
    night: 'e natës',
    noon: 'e mesditës',
    pm: 'm.d.'
  },
  narrow: {
    afternoon: 'e pasdites',
    am: 'p.d.',
    evening: 'e mbrëmjes',
    midnight: 'e mesnatës',
    morning: 'e mëngjesit',
    night: 'e natës',
    noon: 'e mesditës',
    pm: 'm.d.'
  },
  wide: {
    afternoon: 'e pasdites',
    am: 'e paradites',
    evening: 'e mbrëmjes',
    midnight: 'e mesnatës',
    morning: 'e mëngjesit',
    night: 'e natës',
    noon: 'e mesditës',
    pm: 'e pasdites'
  }
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber)
  return number + '.'
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
    defaultFormattingWidth: 'wide',
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
