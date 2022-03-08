import RRuleClass, {
  Frequency as FrequencyEnum,
  RRuleSet as RRuleSetClass,
  Weekday as WeekdayClass,
} from 'rrule';
type RRuleCommonJS = {
  Frequency: typeof FrequencyEnum;
  RRule: typeof RRuleClass;
  RRuleSet: typeof RRuleSetClass;
  Weekday: typeof WeekdayClass;
};
const rrule_common_js = RRuleClass as unknown as RRuleCommonJS;
export const {
  Frequency,
  RRule,
  RRuleSet,
  Weekday,
} = rrule_common_js;
export {
  ByWeekday,
  Options,
  RRuleStrOptions,
  rrulestr,
  WeekdayStr,
} from 'rrule';
export default RRule;
