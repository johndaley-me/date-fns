var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'më pak se një sekondë',
    other: 'më pak se {{count}} sekonda'
  },

  xSeconds: {
    one: '1 sekondë',
    other: '{{count}} sekonda'
  },

  halfAMinute: 'gjysmë minutë',

  lessThanXMinutes: {
    one: 'më pak se një minutë',
    other: 'më pak se {{count}} minuta'
  },

  xMinutes: {
    one: '1 minutë',
    other: '{{count}} minuta'
  },

  aboutXHours: {
    one: 'rreth 1 orë',
    other: 'rreth {{count}} orë'
  },

  xHours: {
    one: '1 orë',
    other: '{{count}} orë'
  },

  xDays: {
    one: '1 dite',
    other: '{{count}} ditë'
  },

  aboutXWeeks: {
    one: 'rreth 1 javë',
    other: 'rreth {{count}} javë'
  },

  xWeeks: {
    one: '1 javë',
    other: '{{count}} javë'
  },

  aboutXMonths: {
    one: 'rreth 1 muaj',
    other: 'rreth {{count}} muaj'
  },

  xMonths: {
    one: '1 muaj',
    other: '{{count}} muaj'
  },

  aboutXYears: {
    one: 'rreth 1 vit',
    other: 'rreth {{count}} vjet'
  },

  xYears: {
    one: '1 vit',
    other: '{{count}} vjet'
  },

  overXYears: {
    one: 'mbi 1 vit',
    other: 'mbi {{count}} vjet'
  },

  almostXYears: {
    one: 'gati 1 vit',
    other: 'gati {{count}} vjet'
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
      return 'pas ' + result
    } else {
      return result + ' më parë'
    }
  }

  return result
}
