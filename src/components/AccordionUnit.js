import { Accordion } from 'react-bootstrap';

const AccordionUnit = ({ eventKey = 0, klass = '', header, body }) => {
  return (
    <Accordion className="accordion-unit">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className={klass}>{header}</Accordion.Header>
        <Accordion.Body>
          <p>{body}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default AccordionUnit;
