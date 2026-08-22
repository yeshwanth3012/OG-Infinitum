import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { about } from '../data/siteContent.js'

export default function About() {
  return (
    <>
      <Hero eyebrow="About OG Infinitum" headline={about.hero} variant="navy" size="md" />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="The Challenge" title="Clarity Is the Real Gap" />
            <p>{about.coreMessage}</p>
            <p>{about.problem}</p>
          </div>
          <div>
            <div className="note-panel">
              <h3>What We Believe</h3>
              <p>{about.belief}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Our Solution" title={about.solution} align="center" />
          <div className="grid grid-3">
            {about.weHelp.map((item) => (
              <div className="card" key={item}>
                <p style={{ marginBottom: 0, fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--navy-800)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Why We're Different" title="One Ecosystem, Not Isolated Services" />
            <p>{about.whyDifferent}</p>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--navy-800)', fontSize: 20 }}>{about.purpose}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Mission" title="Empowering Every Learner" />
            <p>{about.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Our Promise</span>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            {about.promiseLines.map((line) => (
              <h3 key={line} style={{ color: '#fff' }}>{line}</h3>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={about.closing} ctas={[{ label: 'Explore Our Ecosystem', to: '/ecosystem' }, { label: 'Meet Our Leadership', to: '/leadership' }]} />
    </>
  )
}
