
import {useState, useEffect} from 'react';

import FormControl from 'react-bootstrap/FormControl';
import { DAY, HOUR, MINUTE, MONTH, WEEK, YEAR } from '../lib/constant';
import DurationSelect from './DurationSelect';

export default function SalaryPerMinute(props) {

  const [salary, setSalary] = useState(0);
  const [unit, setUnit] = useState(MINUTE);
  const [people, setPeople] = useState(0);
  const [meeting, setMeeting] = useState(0);

  function handleSalaryChange(el) {
    const val = Number(el.target.value);
    setSalary(val);
  }

  function handlePeopleChange(el) {
    const val = Number(el.target.value);
    setPeople(val);
  }

  function handleMeetingChange(el) {
    const val = Number(el.target.value);
    setMeeting(val);
  }

  function handleUnitChange(el) {
    const val = Number(el.target.value);
    setUnit(val);
  }

  useEffect(() => {
    let salaryPerMinute = 0;
    switch(unit) {
      case YEAR:
        // 9h per day, 5 days a week, 52 weeks a year
        salaryPerMinute = salary / (HOUR * 9 * 5 * 52); 
        break;
      case MONTH:
        // 9h per day, 5 days a week, 1/12 of a year
        salaryPerMinute = salary / (HOUR * 9 * 5 * YEAR / 12); 
        break;
      case WEEK:
        // 9h per day, 5 days a week
        salaryPerMinute = salary / (HOUR * 9 * 5); 
        break;
      case DAY:
        // 9h per day
        salaryPerMinute = salary / (HOUR * 9); 
        break;
      default:
        salaryPerMinute = salary / unit;
    }

    // set how many meetings will be attended
    let meetingAttended = props.withMeeting ? meeting : props.occurrencePerYear;

    // salary per minute, by the number of people
    // proportionally to the number of meetings they can attend per year
    props.onChange(salaryPerMinute * people * (meetingAttended / props.occurrencePerYear));
  }, [salary, unit, people, meeting])

  return (
    <div style={{display: 'flex'}}>
      <FormControl onChange={handleSalaryChange} placeholder="salary" />
      <div style={{margin: '0 .3em'}}> per </div>
      <DurationSelect default={MINUTE} onChange={handleUnitChange} />
      <FormControl onChange={handlePeopleChange} placeholder="#people" />
      {
        props.withMeeting &&
        <FormControl onChange={handleMeetingChange} placeholder="#meetings" />
      }
    </div>
  )
}