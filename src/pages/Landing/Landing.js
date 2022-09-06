import '../../assets/css/LandingPage.scss';
import {
  About,
  Contact,
  Documentation,
  Features,
  Overview,
  Register
} from '..';

const Landing = () => {
  return (
    <div className="container">
      <div className="landing">
        <section id="overview">
          <Overview />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="docs">
          <Documentation />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="register">
          <Register />
        </section>
      </div>
    </div>
  );
};
export default Landing;
