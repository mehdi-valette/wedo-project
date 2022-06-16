
import FormSelect from 'react-bootstrap/FormSelect';

export default function DurationSelect(props) {
  // the first number is the number of minutes within this unit.
  // e.g. 1 day = 1440 minutes
  let options = [
    [1, "minutes"],
    [60, "hours"],
    [1440, "days"],
    [10080, "weeks"],
    [43680, "months"],
    [524160, "year"]
  ];
  
  // can show only the short, or only the long units of time
  if(props.short) {
    options = options.slice(0, 2);
  } else if(props.long) {
    options = options.slice(2);
  }
  
  return(
      <FormSelect value={props.default} onChange={props.onChange}>
        {options.map(o => <option key={o[0]} value={o[0]}>{o[1]}</option>)}
      </FormSelect>
  )
}