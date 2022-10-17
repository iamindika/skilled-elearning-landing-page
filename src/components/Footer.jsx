import Logo from "./Logo";
import StartButton from "./StartButton";

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg">
      <div className="container">
        <Logo />
        <StartButton />
      </div>
    </div>

    <p className="footer-attribution">
      Challenge by{' '}
      <a 
        className="footer-link"
        href="https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q"
        target="_blank"
        rel="noopener noreferrer"
        >Frontend Mentor</a>.{' '} 
      Coded by{' '}
      <a 
        className="footer-link"
        href="https://www.frontendmentor.io/profile/iamindika"
        target="_blank"
        rel="noopener noreferrer"
        >Indika KT</a>.
    </p>
  </footer>
);

export default Footer;