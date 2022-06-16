import { moneyFormat } from '../lib/money';
import { Graph } from './Graph';

export function BlockGraph(props) {

  const saving = 0.3;

  const costPerMeeting = props.meetingPriceFix + props.meetingPricePerMinute * props.meetingDuration;
  const costPerYear = costPerMeeting * props.occurrencePerYear;
  const savingPerMeeting = costPerMeeting * saving;
  const savingPerYear = costPerYear * saving;

  return (
    <div>
      <p>
        The total estimated cost of one meeting is {moneyFormat(costPerMeeting)}, or {moneyFormat(costPerYear)} per year.
        <br />
        WEDO can save your company 30%, that's {moneyFormat(savingPerMeeting)} per meeting, or {moneyFormat(savingPerYear)} per year!!
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          textAlign: 'right',
          columnGap: '1em'
        }}
      >
        With WEDO: <Graph saving={saving} price={costPerYear - savingPerYear} />
        Without WEDO: <Graph saving={null} price={costPerYear}/>
      </div>
    </div>
  )
}