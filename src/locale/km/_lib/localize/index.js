import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  abbreviated: ['មុន គ.ស.', 'គ.ស.'],
  narrow: ['មុន គ.ស.', 'គ.ស.'],
  wide: ['មុន​គ្រិស្តសករាជ', 'គ្រិស្តសករាជ']
}

var quarterValues = {
  abbreviated: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4'],
  narrow: ['1', '2', '3', '4'],
  wide: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4']
}

var monthValues = {
  abbreviated: [
    'មករា',
    'កុម្ភៈ',
    'មីនា',
    'មេសា',
    'ឧសភា',
    'មិថុនា',
    'កក្កដា',
    'សីហា',
    'កញ្ញា',
    'តុលា',
    'វិច្ឆិកា',
    'ធ្នូ'
  ],
  narrow: ['ម', 'ក', 'ម', 'ម', 'ឧ', 'ម', 'ក', 'ស', 'ក', 'ត', 'វ', 'ធ'],
  wide: [
    'មករា',
    'កុម្ភៈ',
    'មីនា',
    'មេសា',
    'ឧសភា',
    'មិថុនា',
    'កក្កដា',
    'សីហា',
    'កញ្ញា',
    'តុលា',
    'វិច្ឆិកា',
    'ធ្នូ'
  ]
}

var dayValues = {
  abbreviated: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហ', 'សុក្រ', 'សៅរ៍'],
  narrow: ['អ', 'ច', 'អ', 'ព', 'ព', 'ស', 'ស'],
  short: ['អា', 'ច', 'អ', 'ពុ', 'ព្រ', 'សុ', 'ស'],
  wide: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍']
}

var formattingDayValues = {
  abbreviated: dayValues.abbreviated,
  narrow: dayValues.narrow,
  short: dayValues.short,
  wide: ['អាទិត្យ', 'ច័ន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍']
}

var dayPeriodValues = {
  abbreviated: {
    afternoon: 'រសៀល',
    am: 'AM',
    evening: 'ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'ព្រឹក',
    night: 'យប់',
    noon: 'ថ្ងៃ​ត្រង់',
    pm: 'PM'
  },
  narrow: {
    afternoon: 'រសៀល',
    am: 'AM',
    evening: 'ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'ព្រឹក',
    night: 'យប់',
    noon: 'ថ្ងៃ​ត្រង់',
    pm: 'PM'
  },
  wide: {
    afternoon: 'រសៀល',
    am: 'AM',
    evening: 'ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'ព្រឹក',
    night: 'យប់',
    noon: 'ថ្ងៃ​ត្រង់',
    pm: 'PM'
  }
}

var formattingDayPeriodValues = {
  abbreviated: {
    afternoon: 'នៅពេលរសៀល',
    am: 'AM',
    evening: 'នៅពេល​ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'នៅពេល​ព្រឹក',
    night: 'នៅពេល​យប់',
    noon: 'ថ្ងៃត្រង់',
    pm: 'PM'
  },
  narrow: {
    afternoon: 'នៅពេលរសៀល',
    am: 'a',
    evening: 'នៅពេល​ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'នៅពេល​ព្រឹក',
    night: 'នៅពេល​យប់',
    noon: 'ថ្ងៃត្រង់',
    pm: 'p'
  },
  wide: {
    afternoon: 'នៅពេលរសៀល',
    am: 'AM',
    evening: 'នៅពេល​ល្ងាច',
    midnight: 'អធ្រាត្រ',
    morning: 'នៅពេល​ព្រឹក',
    night: 'នៅពេល​យប់',
    noon: 'ថ្ងៃត្រង់',
    pm: 'PM'
  }
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  return 'ទី' + dirtyNumber
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
