var formatRelativeLocale = {
  lastWeek: "'ថ្ងៃ'eeee'ចុងក្រោយនៅម៉ោង' p",
  yesterday: "'ម្សិលមិញម៉ោង' p",
  today: "'ថ្ងៃនេះនៅម៉ោង' p",
  tomorrow: "'ថ្ងៃស្អែកម៉ោង' p",
  nextWeek: "'ថ្ង'eeee'វេលាម៉ោង' p",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
