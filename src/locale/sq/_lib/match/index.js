import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)\.?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(p\.?\s?k\.?|mb\.?\s?k\.?\s?e\.?)/i,
  abbreviated: /^(p\.?\s?k\.?|mb\.?\s?k\.?\s?e\.?)/i,
  wide: /^(para Krishtit|mbas Krishtit)/i
}
var parseEraPatterns = {
  any: [/^p/i, /^m/i]
}

// avoid confusing Roman numerals with "i" separator
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^tremujori (i [1234]-(re|t|te)|i{1,3}v?$).*/i,
  wide: /^tremujori i ((1|par)|(2|dyt)|(3|tre)|(4|kat)).*/i
}
var parseQuarterPatterns = {
  abbreviated: [
    /^tremujori i$/i,
    /^tremujori ii$/i,
    /^tremujori iii$/i,
    /^tremujori iv$/i
  ],
  any: [/(1|par)/i, /(2|dyt)/i, /(3|tre)/i, /(4|kat)/i]
}

var matchMonthPatterns = {
  narrow: /^(j|sh|m|p|m|q|k|g|t|n|d)/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|korr|gush|sht|tet|n[ëe]n|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nentor|dhjetor)/i
}
var parseMonthPatterns = {
  any: [
    /^j/i,
    /^sh/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^sht/i,
    /^t/i,
    /^n/i,
    /^d/i
  ]
}

var matchDayPatterns = {
  narrow: /^[dhmeps]/i,
  short: /^(die|h[ëe]n|mar|m[ëe]r|enj|pre|sht)/i,
  abbreviated: /^(die|h[ëe]n|mar|m[ëe]r|enj|pre|sht)/i,
  wide: /^e (diel|h[ëe]n[ëe]|mart[ëe]|m[ëe]rkur[ëe]|enjte|premte|shtun[ëe])/i
}
var parseDayPatterns = {
  wide: [/^e d/i, /^e h/i, /^e ma/i, /^e m[eë]/i, /^e e/i, /^e p/i, /^e s/i],
  any: [/^d/i, /^h/i, /^m/i, /^m[eë]/i, /^e/i, /^p/i, /^sh/i]
}

var matchDayPeriodPatterns = {
  any: /^(([pm]\.?d\.?)|e (pasdites|paradites|mbr[ëe]mjes|mesnat[ëe]s|m[ëe]ngjesit|nat[ëe]s|mesdit[ëe]s))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^p/i,
    pm: /^m/i,
    midnight: /mesn/i,
    noon: /^mesd/i,
    morning: /m[ëe]ng/i,
    afternoon: /pas/i,
    evening: /mbr/i,
    night: /nat/i
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
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
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
