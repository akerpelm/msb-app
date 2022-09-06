import '../assets/css/Footer.scss';
import { Link } from 'react-scroll';
import { navBarHeight } from '../util/constants';

const Footer = () => {
  const leftFooterLinks = [
    { label: 'Back To Top', link: 'overview' },
    { label: 'Features', link: 'features' },
    { label: 'About Us', link: 'about' }
    // 'Blog'
  ];

  const rightFooterLinks = [
    //   'LinkedIn',
    // 'Twitter',
    { label: 'Documentation', link: 'docs' },
    { label: 'Sign Up Today', link: 'register' },
    { label: 'Contact Us', link: 'contact' }
    // 'Contact Us'
  ];

  return (
    <div className="footer">
      <div className="footer-col-1">
        <ul>
          {leftFooterLinks.map(({ label, link }, i) => {
            return (
              <Link
                to={link}
                key={i}
                className="footer-link"
                offset={navBarHeight}
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="footer-col-2">
        <ul>
          {rightFooterLinks.map(({ label, link }, i) => {
            return (
              <Link
                to={link}
                key={i}
                className="footer-link"
                offset={navBarHeight}
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="footer-col-2"></div>
    </div>
  );
};
export default Footer;
