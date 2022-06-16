import './App.css';
import {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';

import MeetingDurationPrice from './components/BlockMeetingDurationPrice';
import Block from './components/Block';

function App() {

  const [occurrencePerYear, setOccurrencePerYear] = useState(1);
  const [preparationDuration, setPreparationDuration] = useState(0);
  const [preparationPricePerMinute, setPreparationPricePerMinute] = useState(0);
  const [meetingPriceFix, setMeetingPriceFix] = useState(0);
  const [meetingDuration, setMeetingDuration] = useState(0);
  const [meetingPricePerMinute, setMeetingPricePerMinute] = useState(0);
  const [minuteDuration, setMinuteDuration] = useState(0);
  const [minutePricePerMinute, setMinutePricePerMinute] = useState(0);

  return (
    <div style={{width:' 20em'}}>
    <Accordion>
      <Block title="Duration and price of the meeting (1h30, 20.-)"><MeetingDurationPrice
            duration={meetingDuration}
            price={meetingPriceFix}
            onDurationChange={setMeetingDuration}
            onPriceChange={setMeetingPriceFix}
          />
      </Block>
    </Accordion>
    </div>
  );
}

export default App;
