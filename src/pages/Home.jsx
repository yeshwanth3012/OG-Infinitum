import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PillarCard from '../components/PillarCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { home, brand } from '../data/siteContent.js'

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        headline={home.hero.headline}
        subheadline={home.hero.subheading}
        ctas={home.hero.ctas}
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Why We Exist" title={home.why.heading} />
          </div>
          <div>
            {home.why.copy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="The Learner Journey" title="Discover → Decide → Develop → Experience → Launch → Lead" align="center" subtitle={home.journeySupport} />
          <div className="divider-flow" style={{ justifyContent: 'center' }}>
            {brand.journey.map((step, i) => (
              <span key={step}>
                {step}
                {i < brand.journey.length - 1 && <span className="arrow"> → </span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="container">
          <SectionHeading eyebrow="Our Ecosystem" title={home.ecosystemHeading} subtitle={home.ecosystemSubhead} align="center" />
          <div className="grid grid-4">
            {home.cards.map((card, i) => (
              <PillarCard key={card.slug} index={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading eyebrow="What Makes Us Different" title="We Build Differently, On Purpose" align="center" />
          <div className="grid grid-2">
            {home.whyDifferent.map((line) => {
              const [neg, pos] = line.split('. ')
              return (
                <div className="card" key={line} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 6, fontSize: 14.5 }}>{neg}.</p>
                  <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: 0 }}>{pos}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Measuring What Matters" title="Our Impact, In Progress" align="center" subtitle="We track outcomes across the full learner journey — figures will be published here as they are verified." />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {home.impactCounters.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/impact" className="btn btn-outline-dark">See Our Full Impact</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Aligned With India's Future" title="Contributing To National Priorities" align="center" />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {home.indiasFuture.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Partner With Us"
        heading={home.partnerCta.heading}
        copy={home.partnerCta.items.join(' · ')}
        ctas={[{ label: 'Become a Partner', to: '/partners' }, { label: 'Explore the Ecosystem', to: '/ecosystem' }]}
      />

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Resources & Insights" title="Knowledge to Help You Move Forward" align="center" />
          <div className="grid grid-4">
            {home.insights.map((item) => (
              <div className="card" key={item}>
                <h3 className="card__title">{item}</h3>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/resources" className="btn btn-outline-dark">Visit the Resource Centre</Link>
          </div>
        </div>
      </section>
    </>
  )
}
