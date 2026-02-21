import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__left">
        <p className="kicker">Plataforma educativa (MVP)</p>
        <h1>Aprende con cursos cortos, claros y prácticos</h1>
        <p className="lead">
          Videos tipo “curso” + artículos de apoyo. Construido con React y organizado con SCRUM.
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

      <div className="hero__right">
        <div className="panel">
          <h2>¿Qué incluye el MVP?</h2>
          <ul>
            <li>Navegación clara (Router + Navbar)</li>
            <li>Listado de cursos en formato cards</li>
            <li>Artículos de apoyo con lectura rápida</li>
            <li>Diseño responsivo para capturas</li>
          </ul>
        </div>

        <div className="panel panel--soft">
          <h3>Tip para tu evidencia</h3>
          <p>
            Luego tomas screenshots de: Inicio, Videos, Artículos y una vista en móvil (DevTools).
          </p>
        </div>
      </div>
    </section>
  );
}