import landing1 from '../../assets/images/landing1.svg';
import '../../assets/css/LandingPage.scss';
import { ControlledCarousel } from '../../components';
import { Link } from 'react-router-dom';
import * as RS from 'react-scroll';
import { landingCarouselData } from '../../util/constants';
import { About, Contact, Documentation, Features, Register } from '..';
import Scroll from 'react-scroll';
import { navBarHeight } from '../../util/constants/SharedLayoutConstants';
const ScrollLink = Scroll.ScrollLink;
const scroller = Scroll.scroller;

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-title">
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
              We have identified features that are lacking in existing learning
              software, and have found ways to create a seamless experience for
              educators and students alike.
            </p>
            <p>
              Charging exorbitant prices for students to have access to learning
              software doesn't make sense. We have redefined the pricing model
              for educational technology, charging only 20% of the cheapest
              existing solution.
            </p>
            <div className="btn-container">
              <RS.Link
                to="features"
                className="btn btn-hero"
                offset={navBarHeight}
                delay={10000}
              >
                Learn More
              </RS.Link>
              <Link to="/register" className="btn btn-hero">
                Register Today
              </Link>
            </div>
          </div>
          <img src={landing1} alt="overview-img-1" className="img main-img" />
        </div>
        <ControlledCarousel data={landingCarouselData} />
      </div>
    </div>
  );
};
export default Overview;
