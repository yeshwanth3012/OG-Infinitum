import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { leadershipPage } from '../data/siteContent.js'
import './leadership.css'

export default function Leadership() {
  const { founder, cofounder } = leadershipPage
  return (
    <>
      <Hero eyebrow="Leadership" headline="The People Behind OG Infinitum" size="md" />

      <section className="section">
        <div className="container">
          <div className="card leader">
            <img className="leader__photo" src={founder.photo} alt="" style={{ '--focus': founder.photoFocus }} />
            <div>
              <SectionHeading eyebrow={founder.role} title={founder.name} />
              {founder.paragraphs.map((paragraph, index) => (
                <p key={paragraph} style={{ marginBottom: index === founder.paragraphs.length - 1 ? 0 : undefined }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <div className="card leader">
            <img className="leader__photo" src={cofounder.photo} alt="" style={{ '--focus': cofounder.photoFocus }} />
            <div>
              <SectionHeading eyebrow={cofounder.role} title={cofounder.name} />
              {cofounder.paragraphs.map((paragraph, index) => (
                <p key={paragraph} style={{ marginBottom: index === cofounder.paragraphs.length - 1 ? 0 : undefined }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Want to Learn More About Our Journey?" ctas={[{ label: 'About OG Infinitum', to: '/about' }, { label: 'Explore the Ecosystem', to: '/ecosystem' }]} />
    </>
  )
}
