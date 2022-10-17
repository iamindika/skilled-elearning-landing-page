import Course from "./Course";
import courseList from "../db/data";

const Catalog = () => (
  <section className="catalog">
    <div className="container">
      <h2 className="catalog-title">
        Check out our most popular courses!
      </h2>

      {courseList.map((course) => (
        <Course
          key={course.id}
          {...course}
        />
      ))}
    </div>
  </section>
);

export default Catalog;