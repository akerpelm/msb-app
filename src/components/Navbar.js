import { Link } from 'react-scroll';
import '../assets/css/Navbar.scss';
import { navBarHeight, navLinks } from '../util/constants';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="link-container">
          {navLinks.map(({ ref, display, icon, link = false }, i) => {
            return (
              <Link className="btn" to={ref} key={i} offset={navBarHeight} spy>
                {display}
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
