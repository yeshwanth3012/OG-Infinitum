import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { about, leadershipPage } from '../data/siteContent.js'
import './about.css'

export default function About() {
  return (
    <>
      <Hero eyebrow="About OG Infinitum" headline={about.hero} variant="navy" size="md" />

      <section className="section">
        <div className="container about-lead">
          <SectionHeading eyebrow="The Challenge" title="Clarity Is the Real Gap" />
          <p>{about.coreMessage}</p>
          <p>{about.problem}</p>
          <p className="about-belief">{about.belief}</p>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container about-solution">
          <SectionHeading eyebrow="Our Solution" title={about.solution} align="center" />
          <ul className="about-helps">
            {about.weHelp.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container about-team">
          <SectionHeading eyebrow="Leadership" title="The Visionaries" align="center" />
          <div className="about-team__grid">
            {[leadershipPage.founder, leadershipPage.cofounder].map((person) => (
              <article key={person.name} className="about-team__person">
                <img
                  className="about-team__photo"
                  src={person.photo}
                  alt=""
                  style={{ '--focus': person.photoFocus }}
                />
                <div>
                  <p className="about-team__role">{person.role}</p>
                  <h3 className="about-team__name">{person.name}</h3>
                  {person.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="about-team__copy">{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="about-team__more">
            <Link to="/leadership">Read their story</Link>
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about-next">
          <Link to="/ecosystem">Explore Our Ecosystem</Link>
        </div>
      </section>
    </>
  )
}
