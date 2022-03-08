# rrule-es6

### Installation

```console
npm i @mackgevanni/rrule-es6
```

### ES6 import

```javascript
import { RRule, RRuleSet, rrulestr } from '@mackgevanni/rrule-es6';

const options = {
  freq: RRule.WEEKLY,
  dtstart: new Date(Date.UTC(2022, 5, 1, 10, 30)),
  until: new Date(Date.UTC(2022, 12, 31))
};

// RRule
const rrule = new RRule(options);

// RRuleSet
const rrule_set = new RRuleSet();
rrule_set.rrule(new RRule(options));

// rrulestr
const rrulestr_default_options = rrulestr(
  'DTSTART:20220501T023000Z\nRRULE:FREQ=MONTHLY;COUNT=5',
);
```

## Important

The official library is RRule.js ([Github](https://github.com/jakubroztocil/rrule) | [npm](https://www.npmjs.com/package/rrule)).

This package is **just** a wrapper around that excellent library to achieve ES6 import syntax while running Node 16 + TypeScript V4. More info:

- [GitHub Issue #478](https://github.com/jakubroztocil/rrule/issues/478)
- [Stack Overflow Thread](https://stackoverflow.com/questions/63872827/importing-rrule-from-rrule-package-in-typescript-getting-syntaxerror-the-reque)
