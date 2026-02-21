export default function CourseCard({ course }) {
  return (
    <article className="card">
      <img className="card__img" src={course.cover} alt={course.title} loading="lazy" />
      <div className="card__body">
        <div className="badgeRow">
          <span className="badge">{course.level}</span>
          <span className="badge badge--ghost">{course.category}</span>
        </div>

        <h3 className="card__title">{course.title}</h3>
        <p className="card__desc">{course.description}</p>

        <div className="card__meta">
          <span>{course.lessons} lecciones</span>
          <span>•</span>
          <span>{course.duration}</span>
        </div>

        <button className="btn" type="button">
          Ver curso
        </button>
      </div>
    </article>
  );
}