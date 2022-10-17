import { getImage } from "../utilities/helpers";
import PropTypes from "prop-types"

const Course = ({ id, icon, title, description }) => (
  <article className="course">
    <img
      className="course-icon"
      src={getImage(icon)}
      alt="course icon"
    />
    
    <h3 className="course-title">
      {title}
    </h3>

    <p className="course-description">
      {description}
    </p>

    <a
      className="course-link"
      href="https://www.frontendmentor.io/profile/iamindika"
      target="_blank"
      rel="noopener noreferrer"
    >Get Started</a>
  </article>
);

Course.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Course;