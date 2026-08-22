import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { institutionsPage } from '../data/siteContent.js'

export default function Institutions() {
  return (
    <>
      <Hero eyebrow="For Institutions" headline={institutionsPage.hero} subheadline={institutionsPage.heroSub} ctas={[{ label: 'Partner With OG Infinitum', to: '/contact' }]} />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Commitment" title={institutionsPage.coreMessage} align="center" />
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Who We Serve" title="Institutions We Work With" />
            <ul className="tag-list">
              {institutionsPage.whoWeServe.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Support Areas" title="Where We Add Value" />
            <ul className="tag-list">
              {institutionsPage.supportAreas.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection heading={institutionsPage.partnershipMessage} ctas={[{ label: 'Partner With OG Infinitum', to: '/contact' }]} />
    </>
  )
}
