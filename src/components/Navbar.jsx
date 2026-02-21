import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="brand">
          <span className="brand__dot" />
          <span className="brand__name">EduHub</span>
        </div>

        <nav className="nav__links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
          <NavLink to="/videos" className={({ isActive }) => (isActive ? "active" : "")}>
            Videos
          </NavLink>
          <NavLink to="/articulos" className={({ isActive }) => (isActive ? "active" : "")}>
            Artículos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}