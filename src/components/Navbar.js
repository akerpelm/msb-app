import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';
import '../assets/css/Navbar.scss';
import { navLinks } from '../util/constants';
import {
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
  FaFeather,
  FaHome
} from 'react-icons/fa';
const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <nav>
      <div className="nav-center">
        <Link
          to="/"
          className={isActive === true ? 'btn active' : 'btn'}
          onClick={() => setIsActive(true)}
        >
          <FaHome />
          Home
        </Link>
        <div className="link-container">
          {navLinks.map(({ ref, display, icon = <FaHome /> }, i) => {
            return (
              <Link
                className={isActive === i ? 'btn active' : 'btn'}
                to={ref}
                key={i}
                onClick={() => setIsActive(i)}
              >
                {display}
                {/* {icon} */}
              </Link>
            );
          })}
        </div>
        {/* <div className="test">
          <Link to="/register" />
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
