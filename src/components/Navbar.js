import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';
import '../assets/css/Navbar.scss';
// import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

  const links = [
    // {
    //   ref: '/',
    //   display: <Logo />
    // },
    {
      ref: '/features',
      display: 'Features'
    },
    {
      ref: '/about',
      display: 'About Us'
    },
    {
      ref: '/docs',
      display: 'Documentation'
    },
    {
      ref: '/contact',
      display: 'Contact Us'
    },
    {
      ref: '/register',
      display: 'Sign Up'
    }
  ];

  return (
    <nav>
      <div className="nav-center">
        <Link to="/" className="btn">
          Home
        </Link>
        <div className="link-container">
          {links.map(({ ref, display }, i) => {
            return (
              <Link
                className={isActive === i ? 'btn active' : 'btn'}
                to={ref}
                key={i}
                onClick={() => setIsActive(i)}
                onBlur={() => setIsActive(null)}
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
