import '../../assets/css/Solutions.scss';
import Table from 'react-bootstrap/Table';

const Solutions = () => {
  return (
    <div className="solutions">
      <h1 className="title">
        Solutions that reinforce your success in the classroom
      </h1>
      <div className="container page">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
          esse dolore id quam repellendus animi voluptatem ab. Odio dolore
          incidunt est quos quisquam impedit placeat nisi modi sit aut.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
          esse dolore id quam repellendus animi voluptatem ab. Odio dolore
          incidunt est quos quisquam impedit placeat nisi modi sit aut.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
          esse dolore id quam repellendus animi voluptatem ab. Odio dolore
          incidunt est quos quisquam impedit placeat nisi modi sit aut.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
          esse dolore id quam repellendus animi voluptatem ab. Odio dolore
          incidunt est quos quisquam impedit placeat nisi modi sit aut.
        </p>
      </div>

      <h1 className="title">Pricing</h1>
      <div className="pricing">
        <div className="column">
          <h2>Free Tier</h2>
          <ul>
            <li>Test 1</li>
            <li>Test 1</li>
          </ul>
        </div>
        <div className="column">
          <h2>Standard Tier</h2>
          <p>$6.99/student</p>
          <p>Includes ...</p>
          <p>Includes ...</p>
          <p>Includes ...</p>
        </div>

        <div className="column">
          <h2>Premium Tier</h2>
          <p>Test P</p>
        </div>
      </div>
      <Table striped border hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Student Limit</th>
            <th>Polling Software</th>
            <th>Thing 2</th>
            <th>Thing 2</th>
            <th>Thing 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free</td>
            <td>10</td>
            <td>𝙓</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Standard</td>
            <td>30</td>
            <td>✔</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Solutions;
