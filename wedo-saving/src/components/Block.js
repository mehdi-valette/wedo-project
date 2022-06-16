
import Accordion from 'react-bootstrap/Accordion';

export default function Block(props) {
  return(
  <Accordion.Item eventKey={props.eventKey}>
    <Accordion.Header>
      {props.title}
    </Accordion.Header>
    <Accordion.Body>
      {props.children}
    </Accordion.Body>
  </Accordion.Item>
  )
}