import { useState } from 'react';
import { moneyFormat } from '../lib/money';
import SalaryPerMinute from './SalaryPerMinute';

export default function BlockParticipant(props) {

  const [meetingPricePerMinute, setMeetingPricePerMinute] = useState(0);

  return (
    <div>
      <p>
        Indicate the salary per year, month, ...,
        the number of people concerned by that salary,
        and the #meetings they are expected to attend within
        the year (think of vacation).
      </p>

      <SalaryPerMinute
        withMeeting onChange={setMeetingPricePerMinute}
        occurrencePerYear={props.occurrencePerYear}
      />

      <p>
        That's {moneyFormat(props.meetingDuration * meetingPricePerMinute)} of salary per meeting.
        <br />
        There are {props.occurrencePerYear} meetings per year.
      </p>
    </div>
  )
}