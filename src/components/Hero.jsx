import useWindowDimensions from "../hooks/useWindowDimensions";
import { getImage } from "../utilities/helpers";

const RESPONSIVE_HERO_IMG = {
  X_SMALL: {
    size: 0,
    file: "image-hero-mobile.png"
  }, 
  SMALL: {
    size: 500,
    file: "image-hero-mobile@2x.png"
  }, 
  MEDIUM: {
    size: 768,
    file: "image-hero-desktop.png"
  }, 
  LARGE: {
    size: 1440,
    file: "image-hero-desktop@2x.png"
  }
}

const Hero = () => {
  const { width } = useWindowDimensions();

  let heroImage;

  if (width >= RESPONSIVE_HERO_IMG.LARGE.size) {
    heroImage = RESPONSIVE_HERO_IMG.LARGE.file;
  } else if (width >= RESPONSIVE_HERO_IMG.MEDIUM.size) {
    heroImage = RESPONSIVE_HERO_IMG.MEDIUM.file;
  } else if (width >= RESPONSIVE_HERO_IMG.SMALL.size) {
    heroImage = RESPONSIVE_HERO_IMG.SMALL.file;
  } else if (width >= RESPONSIVE_HERO_IMG.X_SMALL.size) {
    heroImage = RESPONSIVE_HERO_IMG.X_SMALL.file;
  } 

  return (
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
          src={getImage(heroImage)}
          alt="hero"
        />
      </div>
    </header>
  );
}

export default Hero;