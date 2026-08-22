import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PillarCard from '../components/PillarCard.jsx'
import JourneySteps from '../components/JourneySteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { ecosystemPage, home } from '../data/siteContent.js'

export default function Ecosystem() {
  return (
    <>
      <Hero eyebrow="Our Ecosystem" headline={ecosystemPage.hero} variant="navy" size="md" />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Why an Ecosystem" title="One Connected Journey" />
            <p>{ecosystemPage.intro}</p>
          </div>
          <div>
            <p>{ecosystemPage.support}</p>
            <p>{ecosystemPage.closing}</p>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="The Journey" title="Eight Pillars, One Path" align="center" />
          <JourneySteps steps={ecosystemPage.journey} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore Each Pillar" title="The Eight Strategic Pillars" align="center" />
          <div className="grid grid-4">
            {home.cards.map((card, i) => (
              <PillarCard key={card.slug} index={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Our Promise" heading={ecosystemPage.promise} ctas={[{ label: 'Start Your Journey', to: '/contact' }, { label: 'Partner With Us', to: '/partners' }]} />
    </>
  )
}
