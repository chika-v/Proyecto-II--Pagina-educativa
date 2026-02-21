import { articles } from "../data/articles.js";

export default function Articles() {
  return (
    <section>
      <div className="pageHead">
        <h2 className="title">Artículos</h2>
        <p className="subtitle">Lecturas rápidas para reforzar lo que ves en los cursos.</p>
      </div>

      <div className="articleList">
        {articles.map((a) => (
          <article key={a.id} className="article">
            <div className="article__top">
              <span className="badge">{a.tag}</span>
              <span className="muted">{a.readTime}</span>
            </div>
            <h3 className="article__title">{a.title}</h3>
            <p className="article__excerpt">{a.excerpt}</p>
            <button className="btn btn--ghost" type="button">Leer</button>
          </article>
        ))}
      </div>
    </section>
  );
}