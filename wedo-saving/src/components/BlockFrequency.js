import Repetition from './Repetition';

export default function BlockFrequency(props) {
  return (
    <div>
      <p>
        Indicate the frequency of the meetings (e.g. 1 every 2 weeks)
        <br />
        1 year is considered to be 52 weeks or 12 months
      </p>

      <Repetition
        onChange={props.onOccurrencePerYearChange}
      />

      <p className="mt-3">
        That's {props.occurrencePerYear} meetings per year.
      </p>
    </div>
  )
}