import { Link as RSLink } from 'react-scroll';
import '../assets/css/Navbar.scss';
import { navBarHeight, navLinks } from '../util/constants';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="link-container">
          {navLinks.map(({ ref, display, icon, link = false }, i) => {
            return (
              <RSLink
                className="btn"
                to={ref}
                key={i}
                offset={navBarHeight}
                spy
                smooth
              >
                {display}
                {icon}
              </RSLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
