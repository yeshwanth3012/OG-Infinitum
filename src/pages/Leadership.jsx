import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { leadershipPage } from '../data/siteContent.js'

export default function Leadership() {
  const { founder, cofounder } = leadershipPage
  return (
    <>
      <Hero eyebrow="Leadership" headline="The People Behind OG Infinitum" size="md" />

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: '40px' }}>
            <SectionHeading eyebrow={founder.role} title={founder.name} />
            <p style={{ fontStyle: 'italic', fontSize: 18, color: 'var(--navy-700)', borderLeft: '3px solid var(--gold-500)', paddingLeft: 16 }}>
              “{founder.quote}”
            </p>
            <p>{founder.story}</p>
            <p>{founder.vision}</p>
            <p style={{ marginBottom: 0 }}>{founder.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <div className="card" style={{ padding: '40px' }}>
            <SectionHeading eyebrow={cofounder.role} title={cofounder.name} />
            <p style={{ fontStyle: 'italic', fontSize: 18, color: 'var(--navy-700)', borderLeft: '3px solid var(--gold-500)', paddingLeft: 16 }}>
              “{cofounder.quote}”
            </p>
            <p style={{ marginBottom: 0 }}>{cofounder.vision}</p>
          </div>
        </div>
      </section>

      <CTASection heading="Want to Learn More About Our Journey?" ctas={[{ label: 'About OG Infinitum', to: '/about' }, { label: 'Explore the Ecosystem', to: '/ecosystem' }]} />
    </>
  )
}
