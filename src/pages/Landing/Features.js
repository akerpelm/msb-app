import '../../assets/css/Features.scss';
import { AccordionUnit, FeatureCard } from '../../components';
import { FAQs, featureConstants } from '../../util/constants';
import { Accordion, Table } from 'react-bootstrap';

const Features = () => {
  const featureList = featureConstants.map((feature, idx) => {
    return <FeatureCard key={idx} feature={feature} />;
  });

  const featureAccordion = (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Features</Accordion.Header>
        <Accordion.Body>
          <div className="image-list">{featureList}</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

  const pricingList = (
    <div>
      <div className="pricing">
        <div className="column">
          <h3>Standard Tier</h3>
          <p>$8.99/student per class.</p>
          <p>Any class of less than 25 students.</p>
          <p>
            Includes <span>14 day trial period</span>.
          </p>
        </div>
        <div className="column">
          <h3>Plus Tier</h3>
          <p>$6.99/student per class.</p>
          <p>Any class of greater than 25 students.</p>
          <p>
            Includes <span>14 day trial period</span>.
          </p>
          <p>Includes proprietary real-time polling software.</p>
        </div>
      </div>
      <Table striped border hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Student Limit</th>
            <th>Polling Software</th>
            <th>Benefit 1</th>
            <th>Benefit 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard</td>
            <td>25</td>
            <td>𝙓</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Plus</td>
            <td>None</td>
            <td>✔</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="features">
      <h1 className="title">
        Solutions that reinforce your success in the classroom
      </h1>
      {featureAccordion}
      <AccordionUnit header="Pricing" body={pricingList} eventKey="1" />
      <AccordionUnit
        header="FAQs"
        eventkey="2"
        body={FAQs.map(({ className, header, body }, i) => {
          return (
            <AccordionUnit
              klass={className}
              header={header}
              body={body}
              eventKey={i}
            />
          );
        })}
      />
    </div>
  );
};
export default Features;
