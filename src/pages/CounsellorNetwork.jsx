import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import JourneySteps from '../components/JourneySteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { counsellorPage } from '../data/siteContent.js'

export default function CounsellorNetwork() {
  return (
    <>
      <Hero eyebrow={counsellorPage.positioning} headline={counsellorPage.hero} subheadline={counsellorPage.heroSub} ctas={[{ label: 'Become an OG Infinitum Certified Counsellor', to: '/contact' }]} />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Our Belief" title={counsellorPage.intro} />
            <p>{counsellorPage.networkMessage}</p>
          </div>
          <div className="note-panel">
            <h3>Our Vision</h3>
            <p style={{ marginBottom: 0 }}>{counsellorPage.vision}</p>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Why Join" title="What the Network Offers" align="center" />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {counsellorPage.why.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Who Can Join" title="Built for Every Kind of Guide" />
            <ul className="check-list">
              {counsellorPage.whoCanJoin.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Member Benefits" title="What You Gain" />
            <ul className="check-list">
              {counsellorPage.benefits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading eyebrow="Your Path" title="Join → Learn → Connect → Guide → Grow → Inspire" align="center" />
          <JourneySteps steps={counsellorPage.journey} variant="navy" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="note-panel" style={{ maxWidth: 820, margin: '0 auto' }}>
            <h3>Our Commitment</h3>
            <p style={{ marginBottom: 0 }}>{counsellorPage.commitment}</p>
          </div>
        </div>
      </section>

      <CTASection heading="Become an OG Infinitum Certified Counsellor" copy="Join the movement transforming how India's students are guided." ctas={[{ label: 'Join the Movement', to: '/contact' }]} />
    </>
  )
}
