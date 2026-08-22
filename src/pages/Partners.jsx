import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CardGrid from '../components/CardGrid.jsx'
import JourneySteps from '../components/JourneySteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { partnersPage } from '../data/siteContent.js'

export default function Partners() {
  return (
    <>
      <Hero eyebrow="Ecosystem Partners" headline={partnersPage.hero} subheadline={partnersPage.heroSub} ctas={[{ label: 'Become a Partner', to: '/contact' }]} />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Partnerships" title="Building Better Futures, Together" align="center" />
          <p style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>{partnersPage.intro}</p>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Why Partner With Us" title="What Partnership Makes Possible" align="center" />
          <CardGrid items={partnersPage.whyPartner.map((t) => ({ title: t }))} columns={4} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Who Can Partner" title="A Wide, Purpose-Aligned Network" align="center" />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {partnersPage.whoCanPartner.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading eyebrow="The Partnership Ecosystem" title="How Every Partner Connects" align="center" />
          <JourneySteps steps={partnersPage.ecosystemFlow} variant="navy" />
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Why Organizations Choose Us" title="A Purpose-Driven Ecosystem" />
            <ul className="check-list">
              {partnersPage.whyOrganizations.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Partnership Models" title="Ways to Collaborate" />
            <ul className="tag-list">
              {partnersPage.models.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Build the Future of Education, Together?" ctas={[{ label: 'Become a Partner', to: '/contact' }]} />
    </>
  )
}
