
export function Graph(props) {
  
  const color = props.saving === null ? '#ff9090' : '#00ff00';
  
  const widthSaving = 1000 * props.saving
  const price = Math.round(props.price)
  
  return (
    <svg viewBox="0 0 1010 65">
      // bar of price
      <rect 
        x="5"
        y="10" 
        width="1000"
        height="50" 
        style={{fill: color,strokeWidth:5,stroke:'rgb(0,0,0)'}}
      />
      // text of price
      <text 
        x="10" 
        y="45" 
        textAnchor="start" 
        style={{fontSize: '2em'}}
      >
        {price}.- CHF
      </text>
      {
        // show the savings if there are any
        props.saving !== null && 
        <g>
          // bar of savings
          <rect
            x={1005 - widthSaving}
            y="10"
            width={widthSaving}
            height="50" 
            style={{fill:'rgb(255,255,255)',strokeWidth:5,stroke:'rgb(0,0,0)'}}
          />
          // text of savings
          <text 
            x={1010 - widthSaving} 
            y="45" 
            textAnchor="start" 
            style={{fontSize: '2em'}}
          >
            {Math.round(props.saving * 100)}% Saved!
          </text>
        </g>
      }
    </svg>)
}