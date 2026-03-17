import Button from "../components/Button";
import "../styles/About.css";

const keywords = ["Créatif", "Rigoureux", "Curieux", "Passionné", "Autonome", "Collaboratif"];

const skills = [
  { category: "Frontend", items: ["Javascript","React", "Vue.js"] },
  { category: "Backend",  items: ["Python","Django","PHP", "Laravel", "CodeIgniter"] },
  { category: "SGBD",   items: ["MySQL", "Postgres"] },
  { category: "Outils",   items: ["Git", "GitHub", "Figma", "Visual Paradigm"] },
];

const personality = [
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Curieux",
    desc: "J'explore constamment de nouvelles technologies et tendances pour rester à la pointe.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0",
    title: "Collaboratif",
    desc: "J'aime travailler en équipe, partager mes connaissances et apprendre des autres.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z",
    title: "Rigoureux",
    desc: "Je porte une attention particulière à la qualité du code, aux détails et aux bonnes pratiques.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Passionné",
    desc: "Le développement web est plus qu'un métier pour moi — c'est une vraie passion au quotidien.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about__inner">

        {/* ── Colonne gauche ── */}
        <div className="about__left">

          <span className="about__tag">// à propos de moi</span>

          <h2 className="about__title">
            Je suis <span className="about__title-accent">Paterne</span>
          </h2>

          <p className="about__bio">
            Jeune diplomé d'un Master professionnel en Genie Logiciel et Base de données 
            de l'Ecole Nationale de l'Informatique. Passionné par le développement web fullstack
            ,je maitrise notamment les technologies Python <strong>(Django)</strong> et Javascript
             <strong> (React)</strong>. <br />
             Avec 2 ans d'expérience, je suis à la recherche d'une  opportunité professionnelle pour mettre en pratiques
              mes compétences techniques, ma rigueur et ma capacité d'adaptation au sein d'une équipe dynamique et innovante.
          </p>

          {/* Mots-clés */}

          {/* Skills */}
          <div className="about__skills">
            {skills.map((group) => (
              <div key={group.category} className="about__skill-group">
                <span className="about__skill-category">{group.category}</span>
                <div className="about__skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="about__skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Colonne droite : 4 cards personnalité ── */}
        <div className="about__right">
          {personality.map((p, i) => (
            <div key={p.title} className="about__pcard" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="about__pcard-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                  <path d={p.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="about__pcard-title">{p.title}</h4>
                <p className="about__pcard-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
