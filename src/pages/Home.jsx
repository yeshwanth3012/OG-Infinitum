import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PillarCard from '../components/PillarCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { home, brand } from '../data/siteContent.js'
import './home.css'

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        headline={home.hero.headline}
        subheadline={home.hero.subheading}
        ctas={home.hero.ctas}
      />

      <section className="section why-exist">
        <div className="container why-exist__intro">
          <span className="eyebrow">{home.why.positioning}</span>
          <p className="why-exist__mark">OG INFINITUM</p>
          <h2 className="why-exist__lines">
            {home.why.statements.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="why-exist__triad">{home.why.triad}</p>
          <p className="why-exist__body">{home.why.body}</p>
        </div>

        <div className="container why-exist__split">
          <div>
            <h3>{home.why.whyTitle}</h3>
            {home.why.whyCopy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h3>{home.why.problemTitle}</h3>
            <ol className="problem-list">
              {home.why.problems.map((item, i) => (
                <li key={item.title}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading
            eyebrow="The Learner Journey"
            title="Discover → Decide → Develop → Experience → Launch → Lead"
            align="center"
            subtitle="Each stage is powered by one or more of our ecosystem pillars."
          />
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
          <SectionHeading eyebrow="Our Solution" title={home.ecosystemHeading} subtitle={home.ecosystemSubhead} align="center" />
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

      <section className="section section--tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            eyebrow="Internships"
            title="Paid hybrid internships for college students"
            subtitle="Practical upskilling · Conversion skills · 3–6 months · ₹5,000–₹10,000 per month"
            align="center"
          />
          <Link to="/internships" className="btn btn-primary">View Internships</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Indirectly contributing to"
            title="Sustainable Development Goals and NEP 2020"
            align="center"
            subtitle="Alignment with these priorities. OG Infinitum does not claim to achieve a goal or hold a formal partnership."
          />
          <ul className="sdg-row">
            {home.sdgs.map((goal) => (
              <li key={goal.n}>
                <img src={goal.icon} alt="" width="84" height="84" />
                <strong>SDG {goal.n}</strong>
                <span>{goal.name}</span>
              </li>
            ))}
            <li className="nep-plate">
              <span className="nep-plate__mark">NEP</span>
              <strong>2020</strong>
              <span>National Education Policy</span>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Partner With Us"
        heading={home.partnerCta.heading}
        copy={home.partnerCta.items.join(' · ')}
        ctas={[{ label: 'Become a Partner', to: '/partners' }, { label: 'Explore the Ecosystem', to: '/ecosystem' }]}
      />
    </>
  )
}
