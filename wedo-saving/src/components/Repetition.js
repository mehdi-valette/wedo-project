
import {useState, useEffect} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Duration from './Duration';

// the user can fill-in a repetition (e.g. 1X every 2 weeks)
export default function Repetition(props) {

  const [meetingNumber, setMeetingNumber] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleMeetingNumberChange(el) {
    const val = Number(el.target.value)
    setMeetingNumber(val);
  }

  useEffect(() => {
    props.onChange(524160 * meetingNumber / duration)
  }, [meetingNumber, duration])

  return (
    <div style={{display: 'flex'}}>
      <FormControl type="number" onChange={handleMeetingNumberChange} placeholder="#meeting" />
      <div style={{margin: '0 .3em'}}>every</div>
      <Duration long onChange={setDuration} />
    </div>
  )
}