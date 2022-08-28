import { Link } from '.';
import '../assets/css/Footer.css';

const Footer = () => {
  const leftFooterLinks = ['Solutions', 'About Us', 'Documentation', 'Blog'];

  const rightFooterLinks = ['LinkedIn', 'Twitter', 'Contact Us'];

  return (
    <div className="footer">
      <div className="footer-col-1">
        <ul>
          {leftFooterLinks.map((label, i) => {
            return <Link label={label} key={i} />;
          })}
        </ul>
      </div>
      <div className="footer-col-2">
        <ul>
          {rightFooterLinks.map((label, i) => {
            return <Link label={label} key={i} />;
          })}
        </ul>
      </div>
      <div className="footer-col-2"></div>
    </div>
  );
};
export default Footer;
