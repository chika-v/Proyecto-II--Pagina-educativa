import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__left">
        <p className="kicker">Plataforma educativa </p>
        <h1>Aprende con cursos cortos, claros y prácticos</h1>
        <p className="lead">
          Videos y cursos, artículos de apoyo.
        </p>

        <div className="hero__cta">
          <Link className="btn" to="/videos">Explorar videos</Link>
          <Link className="btn btn--ghost" to="/articulos">Leer artículos</Link>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat__num">4</div>
            <div className="stat__label">Cursos</div>
          </div>
          <div className="stat">
            <div className="stat__num">4</div>
            <div className="stat__label">Artículos</div>
          </div>
          <div className="stat">
            <div className="stat__num">100%</div>
            <div className="stat__label">Responsivo</div>
          </div>
        </div>
      </div>
    </section>
  );
}