// TODO double check on irregular whitespace issues
// It could be some corruption in CLDR data
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^ទី(\d+)/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(មុន គ\.?ស\.?|គ\.?ស\.?)/i,
  // eslint-disable-next-line no-irregular-whitespace
  wide: /^(មុន​គ្រិស្តសករាជ|គ្រិស្តសករាជ)/i
}
var parseEraPatterns = {
  any: [/^មុន/i, /^គ/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  any: /^ត្រីមាសទី [1234]/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[មកឧសតវធ]/i,
  any: /^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i
}
var parseMonthPatterns = {
  narrow: [
    /^ម/i,
    /^ក/i,
    /^ម/i,
    /^ម/i,
    /^ឧ/i,
    /^ម/i,
    /^ក/i,
    /^ស/i,
    /^ក/i,
    /^ត/i,
    /^វ/i,
    /^ធ/i
  ],
  any: [
    /^មករា/i,
    /^កុម្ភៈ/i,
    /^មីនា/i,
    /^មេសា/i,
    /^ឧសភា/i,
    /^មិថុនា/i,
    /^កក្កដា/i,
    /^សីហា/i,
    /^កញ្ញា/i,
    /^តុលា/i,
    /^វិច្ឆិកា/i,
    /^ធ្នូ/i
  ]
}

var matchDayPatterns = {
  narrow: /^[អចពស]/i,
  short: /^(អា|ច|អ|ពុ|ព្រ|សុ|ស)/i,
  abbreviated: /^(អាទិត្យ|ចន្ទ|អង្គារ|ពុធ|ព្រហ|សុក្រ|សៅរ៍)/i,
  wide: /^(អាទិត្យ|[ចច័]ន្ទ|អង្គារ|ពុធ|ព្រហស្បតិ៍|សុក្រ|សៅរ៍)/i
}
var parseDayPatterns = {
  narrow: [/^អ/i, /^ច/i, /^អ/i, /^ព/i, /^ព/i, /^ស/i, /^ស/i],
  any: [
    /^អាទិត្យ/i,
    /^[ចច័]ន្ទ/i,
    /^អង្គារ/i,
    /^ពុធ/i,
    /^ព្រហ/i,
    /^សុក្រ/i,
    /^សៅរ៍/i
  ]
}

var matchDayPeriodPatterns = {
  // eslint-disable-next-line no-irregular-whitespace
  any: /^(am?|pm?|នៅពេល|រសៀល|ល្ងាច|អធ្រាត្រ|ព្រឹក|យប់|ថ្ងៃ​ត្រង់|ថ្ងៃត្រង់)/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /អធ្រាត្រ/i,
    // eslint-disable-next-line no-irregular-whitespace
    noon: /^(ថ្ងៃ​ត្រង់|ថ្ងៃត្រង់)/i,
    morning: /ព្រឹក/i,
    afternoon: /រសៀល/i,
    evening: /ល្ងាច/i,
    night: /យប់/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
