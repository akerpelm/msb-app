import landing1 from '../assets/images/landing1.svg';
import '../assets/css/LandingPage.css';
// import Wrapper from '../assets/wrappers/LandingPage';
import { Footer, Logo, Navbar } from '../components';
// import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    // <Wrapper>
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            My<span>Study</span>Book
          </h1>
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

          {/* <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link> */}
        </div>
        <img src={landing1} alt="landing-img-1" className="img main-img" />
      </div>
      <div className="container page">
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

          {/* <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link> */}
        </div>
      </div>
      <div className="carousel">
        test
        {/* <div className="info">info</div> */}
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
