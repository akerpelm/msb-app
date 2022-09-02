import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';
import '../assets/css/Navbar.scss';
import { navLinks } from '../util/constants';
// import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <nav>
      <div className="nav-center">
        <Link to="/" className="btn">
          Home
        </Link>
        <div className="link-container">
          {navLinks.map(({ ref, display }, i) => {
            return (
              <Link
                className={isActive === i ? 'btn active' : 'btn'}
                to={ref}
                key={i}
                onClick={() => setIsActive(i)}
              >
                {display}
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
