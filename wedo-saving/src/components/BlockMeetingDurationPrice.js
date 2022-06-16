
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';

import Duration from './Duration';
import {minuteToHour} from '../lib/duration';
import {moneyFormat} from '../lib/money';

// a block of information, part of the main accordion
export default function Block(props) {

  // extract the value from the element and convert into a number
  function handlePriceChange(el) {
    const val =  Number(el.target.value);
    props.onPriceChange(val);
  }

  return (
    <div>
      <p>
        Indicate the duration of the meeting and its price (e.g. renting the room for 1h).
        Do not include the time of preparation and cost of salary (calculated separately).
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '1em'}}>
        <span>Duration: </span>
        <Duration
          onChange={props.onDurationChange}
          short
        />
        <span>Price: </span>
        <FormControl
          type="number"
          step="5"
          onChange={handlePriceChange}
          value={props.price}
        />
      </div>
      <p class="mt-3">
        That's {minuteToHour(props.duration)} and&nbsp;
        <span style={{whiteSpace: 'nowrap'}}>{moneyFormat(props.price)}</span>&nbsp;
        CHF
      </p>
    </div>)
}