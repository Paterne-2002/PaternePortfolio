import { projects } from "../data/projects";
import "../styles/Projet.css";

export default function Projet() {
  return (
    <section id="projets" className="projet">
      <div className="projet__inner">
        <div className="projet__header">
          <span className="projet__tag">// Mes projets récents</span>
          <h2 className="projet__title">Mes projets</h2>
          <div className="projet__footer">
            <p className="projet__subtitle">
              Voici quelques réalisations que j'ai construites en utilisant différentes technologies.
            </p>
            <div className="projet__stat">
              <span className="projet__stat-icon">✨</span>
              <p className="projet__stat-text">Contribué dans plus de <span className="projet__stat-highlight">20 projets</span></p>
            </div>
          </div>
        </div>

        <div className="projet__grid">
          {projects.map((project) => (
            <article key={project.id} className="projet__card">
              {project.image ? (
                <div className="projet__media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              ) : (
                <div className="projet__media projet__media--placeholder" />
              )}

              <div className="projet__body">
                <h3 className="projet__name">{project.title}</h3>
                <p className="projet__desc">{project.description}</p>

                <div className="projet__tags">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="projet__tagitem">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projet__actions">
                  {project.github && (
                    <a className="projet__btn projet__btn--outline" href={project.github} target="_blank" rel="noreferrer">
                      Code source
                    </a>
                  )}
                  {project.demo && (
    <a
      className="projet__btn projet__btn--primary"
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      Demo
    </a>
  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
