# Mongolian (mn) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                                 | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | --------------------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987                                                            | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5                                                               | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987                                                            | 1986-12-28T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5                                                               | 0004-12-26T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1                                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                               | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | I улирал                                                        | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | II улирал                                                       | Invalid Date             |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1-р улирал                                                      | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2-р улирал                                                      | Invalid Date             |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | I                                                               | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | II                                                              | Invalid Date             |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1                                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                               | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | I улирал                                                        | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | II улирал                                                       | Invalid Date             |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1-р улирал                                                      | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2-р улирал                                                      | Invalid Date             |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2                                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7                                                               | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | 2-р сар                                                         | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | 7-р сар                                                         | Invalid Date             |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | хоёрдугаар сар                                                  | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | долоодугаар сар                                                 | Invalid Date             |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | II                                                              | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | VII                                                             | Invalid Date             |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2                                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7                                                               | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | 2-р сар                                                         | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | 7-р сар                                                         | Invalid Date             |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | Хоёрдугаар сар                                                  | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | Долоодугаар сар                                                 | Invalid Date             |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | II                                                              | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | VII                                                             | Invalid Date             |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1                                                               | 2018-12-30T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 49                                                              | 2019-12-01T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1                                                               | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48                                                              | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11                                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28                                                              | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42                                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365                                                             | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | даваа                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | баасан                                                          | Invalid Date             |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1                                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5                                                               | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | даваа                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | баасан                                                          | Invalid Date             |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 2                                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 6                                                               | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | даваа                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | баасан                                                          | Invalid Date             |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 2                                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 6                                                               | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Даваа                                                           | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Баасан                                                          | Invalid Date             |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Да                                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | Ба                                                              | Invalid Date             |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | aa           | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | bb           | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | ү.ө.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ү.х.                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ү.ө.                                                            | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | өглөө                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | өдөр                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | орой                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | шөнө                                                            | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | өглөө                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | өдөр                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | орой                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | шөнө                                                            | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | өглөө                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | өдөр                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | орой                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | шөнө                                                            | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | өглөө                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | өдөр                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | орой                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | шөнө                                                            | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | өглөө                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | өдөр                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | орой                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | шөнө                                                            | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11                                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11                                                              | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11                                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23                                                              | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11                                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11                                                              | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11                                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23                                                              | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1                                                               | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55                                                              | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1                                                               | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55                                                              | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 1987.02.11                                                      | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453.05.29                                                      | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 1987 оны 2-р сарын 11                                           | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны 5-р сарын 29                                           | Invalid Date             |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 1987 оны хоёрдугаар сарын 11                                    | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны тавдугаар сарын 29                                     | Invalid Date             |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | 1987 оны хоёрдугаар сарын 11, лхагва гараг                      | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны тавдугаар сарын 29, ням гараг                          | Invalid Date             |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                                           | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                                           | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                                        | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                                        | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 (GMT+0)                                                | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 (GMT+0)                                                | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 (GMT+00:00)                                            | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 (GMT+00:00)                                            | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 1987.02.11 12:13                                                | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453.05.29 23:59                                                | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 1987 оны 2-р сарын 11 12:13:14                                  | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны 5-р сарын 29 23:59:59                                  | Invalid Date             |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 1987 оны хоёрдугаар сарын 11 12:13:14 (GMT+0)                   | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны тавдугаар сарын 29 23:59:59 (GMT+0)                    | Invalid Date             |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | 1987 оны хоёрдугаар сарын 11, лхагва гараг 12:13:14 (GMT+00:00) | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 1453 оны тавдугаар сарын 29, ням гараг 23:59:59 (GMT+00:00)     | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result             | `includeSeconds: true` | `addSuffix: true`      |
| ------------------------ | ------------------ | ---------------------- | ---------------------- |
| 2006-01-01T00:00:00.000Z | about 6 years      | about 6 years          | in about 6 years       |
| 2005-01-01T00:00:00.000Z | about 5 years      | about 5 years          | in about 5 years       |
| 2004-01-01T00:00:00.000Z | about 4 years      | about 4 years          | in about 4 years       |
| 2003-01-01T00:00:00.000Z | about 3 years      | about 3 years          | in about 3 years       |
| 2002-01-01T00:00:00.000Z | about 2 years      | about 2 years          | in about 2 years       |
| 2001-06-01T00:00:00.000Z | over 1 year        | over 1 year            | in over 1 year         |
| 2001-02-01T00:00:00.000Z | about 1 year       | about 1 year           | in about 1 year        |
| 2001-01-01T00:00:00.000Z | about 1 year       | about 1 year           | in about 1 year        |
| 2000-06-01T00:00:00.000Z | 5 months           | 5 months               | in 5 months            |
| 2000-03-01T00:00:00.000Z | 2 months           | 2 months               | in 2 months            |
| 2000-02-01T00:00:00.000Z | about 1 month      | about 1 month          | in about 1 month       |
| 2000-01-15T00:00:00.000Z | 14 days            | 14 days                | in 14 days             |
| 2000-01-02T00:00:00.000Z | 1 day              | 1 day                  | in 1 day               |
| 2000-01-01T06:00:00.000Z | about 6 hours      | about 6 hours          | in about 6 hours       |
| 2000-01-01T01:00:00.000Z | about 1 hour       | about 1 hour           | in about 1 hour        |
| 2000-01-01T00:45:00.000Z | about 1 hour       | about 1 hour           | in about 1 hour        |
| 2000-01-01T00:30:00.000Z | 30 minutes         | 30 minutes             | in 30 minutes          |
| 2000-01-01T00:15:00.000Z | 15 minutes         | 15 minutes             | in 15 minutes          |
| 2000-01-01T00:01:00.000Z | 1 minute           | 1 minute               | in 1 minute            |
| 2000-01-01T00:00:25.000Z | less than a minute | half a minute          | in less than a minute  |
| 2000-01-01T00:00:15.000Z | less than a minute | less than 20 seconds   | in less than a minute  |
| 2000-01-01T00:00:05.000Z | less than a minute | less than 10 seconds   | in less than a minute  |
| 2000-01-01T00:00:00.000Z | less than a minute | less than 5 seconds    | less than a minute ago |
| 1999-12-31T23:59:55.000Z | less than a minute | less than 10 seconds   | less than a minute ago |
| 1999-12-31T23:59:45.000Z | less than a minute | less than 20 seconds   | less than a minute ago |
| 1999-12-31T23:59:35.000Z | less than a minute | half a minute          | less than a minute ago |
| 1999-12-31T23:59:00.000Z | 1 minute           | 1 minute               | 1 minute ago           |
| 1999-12-31T23:45:00.000Z | 15 minutes         | 15 minutes             | 15 minutes ago         |
| 1999-12-31T23:30:00.000Z | 30 minutes         | 30 minutes             | 30 minutes ago         |
| 1999-12-31T23:15:00.000Z | about 1 hour       | about 1 hour           | about 1 hour ago       |
| 1999-12-31T23:00:00.000Z | about 1 hour       | about 1 hour           | about 1 hour ago       |
| 1999-12-31T18:00:00.000Z | about 6 hours      | about 6 hours          | about 6 hours ago      |
| 1999-12-30T00:00:00.000Z | 2 days             | 2 days                 | 2 days ago             |
| 1999-12-15T00:00:00.000Z | 17 days            | 17 days                | 17 days ago            |
| 1999-12-01T00:00:00.000Z | about 1 month      | about 1 month          | about 1 month ago      |
| 1999-11-01T00:00:00.000Z | 2 months           | 2 months               | 2 months ago           |
| 1999-06-01T00:00:00.000Z | 7 months           | 7 months               | 7 months ago           |
| 1999-01-01T00:00:00.000Z | about 1 year       | about 1 year           | about 1 year ago       |
| 1998-12-01T00:00:00.000Z | about 1 year       | about 1 year           | about 1 year ago       |
| 1998-06-01T00:00:00.000Z | over 1 year        | over 1 year            | over 1 year ago        |
| 1998-01-01T00:00:00.000Z | about 2 years      | about 2 years          | about 2 years ago      |
| 1997-01-01T00:00:00.000Z | about 3 years      | about 3 years          | about 3 years ago      |
| 1996-01-01T00:00:00.000Z | about 4 years      | about 4 years          | about 4 years ago      |
| 1995-01-01T00:00:00.000Z | about 5 years      | about 5 years          | about 5 years ago      |
| 1994-01-01T00:00:00.000Z | about 6 years      | about 6 years          | about 6 years ago      |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result     | `addSuffix: true` | With forced unit (i.e. `hour`) |
| ------------------------ | ---------- | ----------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 years    | in 6 years        | 52608 hours                    |
| 2005-01-01T00:00:00.000Z | 5 years    | in 5 years        | 43848 hours                    |
| 2004-01-01T00:00:00.000Z | 4 years    | in 4 years        | 35064 hours                    |
| 2003-01-01T00:00:00.000Z | 3 years    | in 3 years        | 26304 hours                    |
| 2002-01-01T00:00:00.000Z | 2 years    | in 2 years        | 17544 hours                    |
| 2001-06-01T00:00:00.000Z | 1 year     | in 1 year         | 12408 hours                    |
| 2001-02-01T00:00:00.000Z | 1 year     | in 1 year         | 9528 hours                     |
| 2001-01-01T00:00:00.000Z | 1 year     | in 1 year         | 8784 hours                     |
| 2000-06-01T00:00:00.000Z | 5 months   | in 5 months       | 3648 hours                     |
| 2000-03-01T00:00:00.000Z | 2 months   | in 2 months       | 1440 hours                     |
| 2000-02-01T00:00:00.000Z | 1 month    | in 1 month        | 744 hours                      |
| 2000-01-15T00:00:00.000Z | 14 days    | in 14 days        | 336 hours                      |
| 2000-01-02T00:00:00.000Z | 1 day      | in 1 day          | 24 hours                       |
| 2000-01-01T06:00:00.000Z | 6 hours    | in 6 hours        | 6 hours                        |
| 2000-01-01T01:00:00.000Z | 1 hour     | in 1 hour         | 1 hour                         |
| 2000-01-01T00:45:00.000Z | 45 minutes | in 45 minutes     | 1 hour                         |
| 2000-01-01T00:30:00.000Z | 30 minutes | in 30 minutes     | 1 hour                         |
| 2000-01-01T00:15:00.000Z | 15 minutes | in 15 minutes     | 0 hours                        |
| 2000-01-01T00:01:00.000Z | 1 minute   | in 1 minute       | 0 hours                        |
| 2000-01-01T00:00:25.000Z | 25 seconds | in 25 seconds     | 0 hours                        |
| 2000-01-01T00:00:15.000Z | 15 seconds | in 15 seconds     | 0 hours                        |
| 2000-01-01T00:00:05.000Z | 5 seconds  | in 5 seconds      | 0 hours                        |
| 2000-01-01T00:00:00.000Z | 0 seconds  | 0 seconds ago     | 0 hours                        |
| 1999-12-31T23:59:55.000Z | 5 seconds  | 5 seconds ago     | 0 hours                        |
| 1999-12-31T23:59:45.000Z | 15 seconds | 15 seconds ago    | 0 hours                        |
| 1999-12-31T23:59:35.000Z | 25 seconds | 25 seconds ago    | 0 hours                        |
| 1999-12-31T23:59:00.000Z | 1 minute   | 1 minute ago      | 0 hours                        |
| 1999-12-31T23:45:00.000Z | 15 minutes | 15 minutes ago    | 0 hours                        |
| 1999-12-31T23:30:00.000Z | 30 minutes | 30 minutes ago    | 1 hour                         |
| 1999-12-31T23:15:00.000Z | 45 minutes | 45 minutes ago    | 1 hour                         |
| 1999-12-31T23:00:00.000Z | 1 hour     | 1 hour ago        | 1 hour                         |
| 1999-12-31T18:00:00.000Z | 6 hours    | 6 hours ago       | 6 hours                        |
| 1999-12-30T00:00:00.000Z | 2 days     | 2 days ago        | 48 hours                       |
| 1999-12-15T00:00:00.000Z | 17 days    | 17 days ago       | 408 hours                      |
| 1999-12-01T00:00:00.000Z | 1 month    | 1 month ago       | 744 hours                      |
| 1999-11-01T00:00:00.000Z | 2 months   | 2 months ago      | 1464 hours                     |
| 1999-06-01T00:00:00.000Z | 7 months   | 7 months ago      | 5136 hours                     |
| 1999-01-01T00:00:00.000Z | 1 year     | 1 year ago        | 8760 hours                     |
| 1998-12-01T00:00:00.000Z | 1 year     | 1 year ago        | 9504 hours                     |
| 1998-06-01T00:00:00.000Z | 2 years    | 2 years ago       | 13896 hours                    |
| 1998-01-01T00:00:00.000Z | 2 years    | 2 years ago       | 17520 hours                    |
| 1997-01-01T00:00:00.000Z | 3 years    | 3 years ago       | 26280 hours                    |
| 1996-01-01T00:00:00.000Z | 4 years    | 4 years ago       | 35064 hours                    |
| 1995-01-01T00:00:00.000Z | 5 years    | 5 years ago       | 43824 hours                    |
| 1994-01-01T00:00:00.000Z | 6 years    | 6 years ago       | 52584 hours                    |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result              |
| ------------------------ | ------------------- |
| 2000-01-10T00:00:00.000Z | 2000.01.10          |
| 2000-01-05T00:00:00.000Z | лхагва at 00:00     |
| 2000-01-02T00:00:00.000Z | tomorrow at 00:00   |
| 2000-01-01T00:00:00.000Z | today at 00:00      |
| 1999-12-31T00:00:00.000Z | yesterday at 00:00  |
| 1999-12-27T00:00:00.000Z | last даваа at 00:00 |
| 1999-12-21T00:00:00.000Z | 1999.12.21          |
