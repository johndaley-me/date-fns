var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'តិចជាងមួយវិនាទី',
    other: 'តិចជាង {{count}} វិនាទី'
  },

  xSeconds: {
    one: '១ វិនាទី',
    other: '{{count}} វិនាទី'
  },

  halfAMinute: 'កន្លះនាទី',

  lessThanXMinutes: {
    one: 'តិចជាងមួយនាទី',
    other: 'តិចជាង {{count}} នាទី'
  },

  xMinutes: {
    one: '1 នាទី',
    other: '{{count}} នាទី'
  },

  aboutXHours: {
    one: 'ប្រហែល ១ ម៉ោង',
    other: 'ប្រហែល {{count}} ម៉ោង'
  },

  xHours: {
    one: '1 ម៉ោង',
    other: '{{count}} ម៉ោង'
  },

  xDays: {
    one: '១ ថ្ងៃ',
    other: '{{count}} ថ្ងៃ'
  },

  aboutXWeeks: {
    one: 'ប្រហែល ១ សប្តាហ៍',
    other: 'ប្រហែល {{count}} សប្តាហ៍'
  },

  xWeeks: {
    one: '១ សប្តាហ៍',
    other: '{{count}} សប្តាហ៍'
  },

  aboutXMonths: {
    one: 'ប្រហែល ១ ខែ',
    other: 'ប្រហែល {{count}} ខែ'
  },

  xMonths: {
    one: '១ ខែ',
    other: '{{count}} ខែ'
  },

  aboutXYears: {
    one: 'ប្រហែល ១ ឆ្នាំ',
    other: 'ប្រហែល {{count}} ឆ្នាំ'
  },

  xYears: {
    one: '1 ឆ្នាំ',
    other: '{{count}} ឆ្នាំ'
  },

  overXYears: {
    one: 'ជាង ១ ឆ្នាំ',
    other: 'ជាង {{count}} ឆ្នាំ'
  },

  almostXYears: {
    one: 'ជិត ១ ឆ្នាំ',
    other: 'ជិត {{count}} ឆ្នាំហើយ'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'ក្នុងរយៈពេល ' + result
    } else {
      return result + '​មក​ហើយ'
    }
  }

  return result
}
