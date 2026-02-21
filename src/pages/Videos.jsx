import { courses } from "../data/courses.js";
import CourseCard from "../components/CourseCard.jsx";

export default function Videos() {
  return (
    <section>
      <div className="pageHead">
        <h2 className="title">Videos</h2>
        <p className="subtitle">Cursos tipo plataforma (estilo Platzi) para aprender paso a paso.</p>
      </div>

      <div className="grid">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}