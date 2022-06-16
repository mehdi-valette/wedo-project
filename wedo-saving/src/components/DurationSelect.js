
import FormSelect from 'react-bootstrap/FormSelect';
import { DAY, HOUR, MINUTE, MONTH, WEEK, YEAR } from '../lib/constant';

export default function DurationSelect(props) {
  // the first number is the number of minutes within this unit.
  // e.g. 1 day = 1440 minutes
  let options = [
    [MINUTE, "minutes"],
    [HOUR, "hours"],
    [DAY, "days"],
    [WEEK, "weeks"],
    [MONTH, "months"],
    [YEAR, "year"]
  ];
  
  // can show only the short, or only the long units of time
  if(props.short) {
    options = options.slice(0, 2);
  } else if(props.long) {
    options = options.slice(2);
  }
  
  return(
      <FormSelect defaultValue={props.default} onChange={props.onChange}>
        {options.map(o => <option key={o[0]} value={o[0]}>{o[1]}</option>)}
      </FormSelect>
  )
}