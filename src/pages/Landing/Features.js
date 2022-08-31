import '../../assets/css/Features.scss';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
const Features = () => {
  return (
    <div className="features">
      <h1 className="title">
        Solutions that reinforce your success in the classroom
      </h1>
      <div className="container page">
        <div className="section">
          <Card text="red">
            <h3>Question Creation</h3>
            <p>Creating questions has never been easier.</p>
            Hello
          </Card>
        </div>
        <div className="section">
          <Card text="red">
            <h3>Question Creation</h3>
            <p>Creating questions has never been easier.</p>
            Hello
          </Card>
        </div>
        <div className="section">
          <h3>Question Creation</h3>
          <p>Creating questions has never been easier.</p>
        </div>
        <div className="section">
          <h3>Question Creation</h3>
          <p>Creating questions has never been easier.</p>
        </div>
        <div className="section">
          <h3>Question Creation</h3>
          <p>Creating questions has never been easier.</p>
        </div>
        <div className="section">
          <h3>Question Creation</h3>
          <p>Creating questions has never been easier.</p>
        </div>
        <div className="section">
          <h3>Question Creation</h3>
          <p>Creating questions has never been easier.</p>
        </div>
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
export default Features;
