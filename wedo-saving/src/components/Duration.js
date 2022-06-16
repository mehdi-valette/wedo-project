
import {useState, useEffect} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import DurationSelect from './DurationSelect';

export default function Duration(props) {
  const [value, setValue] = useState(0)
  const [unit, setUnit] = useState(props.defaultUnit || 1)
  
  function onValue(input) {
    setValue(Number(input.target.value))
  }
  
  function onScale(scale) {
    setUnit(Number(scale.target.value))
  }
  
  useEffect(() => {
    props.onChange(value * unit)
  }, [value, unit])
  
  return (
    <InputGroup>
      <FormControl type="number" onChange={onValue}/>
      <DurationSelect default={unit} long={props.long} short={props.short} onChange={onScale} />
    </InputGroup>
  )
}
