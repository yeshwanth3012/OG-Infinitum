import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { impactPage } from '../data/siteContent.js'

export default function Impact() {
  return (
    <>
      <Hero eyebrow="Our Impact" headline={impactPage.hero} subheadline={impactPage.heroSub} />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="What We Measure" title="Tracking the Full Journey" />
            <ul className="check-list">
              {impactPage.measurementAreas.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Learner Outcomes" title="What Success Looks Like" />
            <ul className="check-list">
              {impactPage.learnerOutcomes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="National Alignment" title="Contributing to India's Priorities" align="center" />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {impactPage.nationalAlignment.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="State Alignment" title="Regional Focus Areas" align="center" />
          <div className="grid grid-2">
            {impactPage.stateAlignment.map((s) => (
              <div className="card" key={s.state}>
                <h3 className="card__title">{s.state}</h3>
                <p className="card__body">{s.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">{impactPage.sdg.heading}</span>
          <p style={{ fontSize: 18 }}>{impactPage.sdg.copy}</p>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.55)' }}>{impactPage.sdg.note}</p>
        </div>
      </section>

      <CTASection heading="Help Us Grow This Impact" copy="Every partnership, mentorship and certification adds another learner outcome we can point to." ctas={[{ label: 'Become a Partner', to: '/partners' }]} />
    </>
  )
}
