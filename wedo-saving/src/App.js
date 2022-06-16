import './App.css';
import {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';

import MeetingDurationPrice from './components/BlockMeetingDurationPrice';
import Block from './components/Block';
import BlockFrequency from './components/BlockFrequency';
import { minuteToHour } from './lib/duration';
import { moneyFormat } from './lib/money';
import BlockParticipant from './components/BlockParticipant';
import { BlockGraph } from './components/BlockGraph';

function App() {

  const [occurrencePerYear, setOccurrencePerYear] = useState(1);
  const [preparationDuration, setPreparationDuration] = useState(0);
  const [preparationPricePerMinute, setPreparationPricePerMinute] = useState(0);
  const [meetingPriceFix, setMeetingPriceFix] = useState(0);
  const [meetingDuration, setMeetingDuration] = useState(0);
  const [meetingPricePerMinute, setMeetingPricePerMinute] = useState(0);
  const [minuteDuration, setMinuteDuration] = useState(0);
  const [minutePricePerMinute, setMinutePricePerMinute] = useState(0);

  const savingPerYear = (meetingPriceFix + meetingPricePerMinute * meetingDuration) * occurrencePerYear * 0.3;

  return (
    <div style={{width:'30em'}}>
    <Accordion alwaysOpen defaultActiveKey={["0", "1", "2", "3"]}>
      <Block eventKey="0" title={`Duration and price of the meeting (${minuteToHour(meetingDuration)}, ${moneyFormat(meetingPriceFix)})`}>
        <MeetingDurationPrice
            duration={meetingDuration}
            price={meetingPriceFix}
            onDurationChange={setMeetingDuration}
            onPriceChange={setMeetingPriceFix}
          />
      </Block>
      <Block eventKey="1" title={`Frequency of the meeting (${occurrencePerYear}/year)`}>
        <BlockFrequency
          onOccurrencePerYearChange={setOccurrencePerYear}
          occurrencePerYear={occurrencePerYear}
        />
      </Block>
      <Block eventKey="2" title={`Participants (${moneyFormat(meetingDuration * meetingPricePerMinute)}/meeting)`}>
        <BlockParticipant
          occurrencePerYear={occurrencePerYear}
          meetingDuration={meetingDuration}
          onPriceChange={setMeetingPricePerMinute}
        />
      </Block>
      <Block eventKey="3" title={`Estimation of savings (30% | ${moneyFormat(savingPerYear)}/year)`}>
        <BlockGraph
          occurrencePerYear={occurrencePerYear}
          meetingPriceFix={meetingPriceFix}
          meetingPricePerMinute={meetingPricePerMinute}
          meetingDuration={meetingDuration}
        />
      </Block>
    </Accordion>
    </div>
  );
}

export default App;
