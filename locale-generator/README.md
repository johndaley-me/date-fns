# Date-fns Locale Generator

The purpose of this folder is to automate partial implementation of a new date-fns locale based on CLDR data and an existing date-fns English locale template. This helps automate the manual process explain in the [date-fns docs](https://date-fns.org/v2.16.1/docs/I18n-Contribution-Guide).

## Getting started
```
cd locale-generator
yarn
# generate locale for "sq" (Albanian) locale
yarn generate sq
cd ..
yarn locale-snapshots
```
Compare snapshot.md files with [CLDR charts](https://unicode-org.github.io/cldr-staging/charts/)
