// Since the dependencies for this file are only installed locally on an ad hoc basis,
// do not force installing dependencies to avoid ESLint issues
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
const memFs = require('mem-fs')
const editor = require('mem-fs-editor')
const cldr = require('cldr')
const _ = require('lodash')
const prettyFormat = require('pretty-format')

const locale = process.argv[2]
if (!locale) {
  throw new Error('Pass locale as last argument (e.g. "sq")')
}
console.log(`Generating files for "${locale}" locale`)

// load data from CLDR
const language = cldr.extractLanguageDisplayNames('en')[locale]
const eras = cldr.extractEraNames(locale)
// include narrow even if not in CLDR so that abbreviated values can be the fallback (instead of 'wide' if narrow is not included)
eras.narrow = eras.narrow || eras.abbreviated
const quarters = cldr.extractQuarterNames(locale)
const months = cldr.extractMonthNames(locale)
const days = cldr.extractDayNames(locale)
const dayPeriods = convertDayPeriods(cldr.extractDayPeriods(locale))
const dateFormats = cldr.extractDateFormats(locale)
const timeFormats = cldr.extractTimeFormats(locale)
const dateTimePatterns = cldr.extractDateTimePatterns(locale)
const dateFormatItems = cldr.extractDateFormatItems(locale)

// Favor 4 digit format by default which is often used in yMd CLDR survey field but
// not always in the date formats
dateFormats.short = dateFormatItems.yMd

const context = {
  locale,
  code: `'${locale}'`,
  language,
  eras,
  quarters,
  months,
  days,
  dayPeriods,
  dateFormats,
  timeFormats,
  dateTimePatterns,
  formatCldrCode,
  _
}

const store = memFs.create()
const fs = editor.create(store)

fs.copyTpl(
  'template/_lib/formatDistance/index.ejs',
  `../src/locale/${locale}/_lib/formatDistance/index.js`,
  context
)
fs.copyTpl(
  'template/_lib/formatLong/index.ejs',
  `../src/locale/${locale}/_lib/formatLong/index.js`,
  context
)
fs.copyTpl(
  'template/_lib/formatRelative/index.ejs',
  `../src/locale/${locale}/_lib/formatRelative/index.js`,
  context
)
fs.copyTpl(
  'template/_lib/localize/index.ejs',
  `../src/locale/${locale}/_lib/localize/index.js`,
  context
)
fs.copyTpl(
  'template/_lib/match/index.ejs',
  `../src/locale/${locale}/_lib/match/index.js`,
  context
)
fs.copyTpl('template/index.ejs', `../src/locale/${locale}/index.js`, context)

fs.commit(() => {
  console.log(`Files generated for "${locale}" locale`)
})

function formatCldrCode(code) {
  return (
    prettyFormat(code, { callToJSON: false, escapeString: false })
      // strip out type annotations
      .replace(/(Array |Object )/g, '')
  )
}

// convert to date-fns naming
function convertDayPeriods(dayPeriods) {
  ;['standAlone', 'format'].forEach(type => {
    ;['narrow', 'abbreviated', 'wide'].forEach(width => {
      dayPeriods[type][width] = mapDayPeriodProps(dayPeriods[type][width])
    })
  })
  return dayPeriods
}

function mapDayPeriodProps({
  am,
  pm,
  midnight,
  noon,
  morning1: morning,
  afternoon1: afternoon,
  evening1: evening,
  night1: night
}) {
  return {
    am,
    pm,
    midnight,
    noon,
    morning,
    afternoon,
    evening,
    night
  }
}
