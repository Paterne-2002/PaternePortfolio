import { experiences } from "../data/experiences";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <div className="experience__header">
          <span className="experience__tag">// Mon parcours professionnel</span>
          <h2 className="experience__title">Expérience</h2>
          <p className="experience__subtitle">
            Découvrez mon parcours professionnel et les compétences acquises au fil des années.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <article key={exp.id} className="experience__item">
              <div className="experience__marker">
                <div className="experience__dot"></div>
                {index < experiences.length - 1 && <div className="experience__line"></div>}
              </div>

              <div className="experience__content">
                <div className="experience__meta">
                  <span className="experience__type">{exp.type}</span>
                  <span className="experience__period">{exp.period}</span>
                </div>

                <h3 className="experience__job-title">{exp.title}</h3>
                <h4 className="experience__company">{exp.company}</h4>

                <p className="experience__description">{exp.description}</p>

                <div className="experience__tech-stack">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="experience__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}