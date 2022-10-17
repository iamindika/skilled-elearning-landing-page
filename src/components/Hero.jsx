import { getImage } from "../utilities/helpers";

const Hero = () => (
  <header className="hero container">
    <div className="hero-content">
      <h1 className="hero-title">
        Maximize skill, minimize budget
      </h1>

      <p className="hero-text">
        Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
      </p>

      <a 
        className="hero-btn"
        href="https://www.frontendmentor.io/profile/iamindika"
        target="_blank"
        rel="noopener noreferrer"
      >Get Started</a>
    </div>

    <div className="hero-image-wrapper container">
      <img
        className="hero-image"
        src={getImage('image-hero-mobile.png')}
        alt="hero"
      />
    </div>
  </header>
);

export default Hero;