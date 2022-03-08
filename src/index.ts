import RRuleClass from 'rrule';
const rrule_lib = RRuleClass as unknown as {
  RRule: typeof RRuleClass;
};
export const { RRule } = rrule_lib;
export default RRule;
export {
  ByWeekday,
  Frequency,
  Options,
  rrulestr,
  RRuleStrOptions,
  RRuleSet,
  Weekday,
  WeekdayStr,
} from 'rrule';
