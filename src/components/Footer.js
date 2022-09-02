import '../assets/css/Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const leftFooterLinks = [
    { label: 'Features', link: '/features' },
    { label: 'About Us', link: '/about' },
    { label: 'Documentation', link: '/docs' }
    // 'Blog'
  ];

  const rightFooterLinks = [
    //   'LinkedIn',
    // 'Twitter',
    { label: 'Sign Up Today', link: '/register' },
    { label: 'Contact Us', link: '/contact' }
    // 'Contact Us'
  ];

  return (
    <div className="footer">
      <div className="footer-col-1">
        <ul>
          {leftFooterLinks.map(({ label, link }, i) => {
            return (
              <Link to={link} key={i} className="footer-link">
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
              <Link to={link} key={i} className="footer-link">
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
