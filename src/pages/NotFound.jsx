import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="center">
      <h2>Página no encontrada</h2>
      <p className="muted">La ruta no existe. Regresa al inicio.</p>
      <Link className="btn" to="/">Ir a Inicio</Link>
    </section>
  );
}