import RRuleClass, {
  Frequency as FrequencyEnum,
  rrulestr as RRuleStrFunc,
  RRuleSet as RRuleSetClass,
  Weekday as WeekdayClass,
} from 'rrule';
type RRuleCommonJS = {
  Frequency: typeof FrequencyEnum;
  rrulestr: typeof RRuleStrFunc;
  RRule: typeof RRuleClass;
  RRuleSet: typeof RRuleSetClass;
  Weekday: typeof WeekdayClass;
};
const rrule_common_js = RRuleClass as unknown as RRuleCommonJS;
export const {
  Frequency,
  rrulestr,
  RRule,
  RRuleSet,
  Weekday,
} = rrule_common_js;
export {
  ByWeekday,
  Options,
  RRuleStrOptions,
  WeekdayStr,
} from 'rrule';
export default RRule;
