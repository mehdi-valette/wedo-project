
import Accordion from 'react-bootstrap/Accordion';

export default function Block(props) {
  return(
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      {props.title}
    </Accordion.Header>
    <Accordion.Body>
      {props.children}
    </Accordion.Body>
  </Accordion.Item>
  )
}