import landing1 from '../../assets/images/landing1.svg';
import '../../assets/css/LandingPage.scss';
// import Wrapper from '../assets/wrappers/LandingPage';
import { Footer, Loading, Logo, Navbar } from '../../components';
import { useAppContext } from '../../context/appContext';
import { Link } from 'react-router-dom';

const Landing = () => {
  const { isLoading } = useAppContext;

  return (
    <div>
      <h2>Don't let outdated technology limit learning potential.</h2>
      <h1>
        My<span>Study</span>Book
      </h1>
      <div className="container page">
        <div className="info">
          <p>
            <span>MyStudyBook</span> was created by educators, for educators.
            MSB is the only product that allows educators to create fully
            customizable, reusable, and highly scalable question banks.
          </p>
          <p>
            We have identified <Link to="/features">features</Link> that are
            lacking in existing learning software, and have found ways to create
            a seamless experience for educators and students alike.
          </p>
          <p>
            Charging exorbitant prices for students to have access to learning
            software doesn't make sense. We have redefined the pricing model for
            educational technology, charging only 20% of the cheapest existing
            solution.
          </p>
          <div className="btn-container">
            <Link to="/features" className="btn btn-hero">
              Learn More
            </Link>
            <Link to="/register" className="btn btn-hero">
              Register Today
            </Link>
          </div>
        </div>
        <img src={landing1} alt="landing-img-1" className="img main-img" />
      </div>
      {/* <div className="container page">
        <img src={landing1} alt="landing-img-1" className="img main-img" />
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            sapiente est veniam facilis harum et optio, tempore accusamus
            aspernatur ab, ipsum sed quisquam laboriosam dolorum neque officiis
            iste commodi quam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            nesciunt reiciendis numquam cupiditate, illum unde deleniti eaque,
            quia, dolor repellendus ipsa architecto reprehenderit eos incidunt a
            voluptate id laborum minima.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ullam
            alias et quia laboriosam, illum animi omnis fugiat ex quae officia.
            Tenetur recusandae debitis sapiente reprehenderit et aperiam maxime
            minus?
          </p>
          
        </div>
      </div> */}
    </div>
  );
};
export default Landing;
