import { useParams, Link, Navigate } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CardGrid from '../components/CardGrid.jsx'
import JourneySteps from '../components/JourneySteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { getPillarBySlug, pillars } from '../data/pillars.js'

export default function PillarPage() {
  const { slug } = useParams()
  const pillar = getPillarBySlug(slug)

  if (!pillar) return <Navigate to="/ecosystem" replace />

  const currentIndex = pillars.findIndex((p) => p.slug === slug)
  const next = pillars[(currentIndex + 1) % pillars.length]

  return (
    <>
      <Hero eyebrow={pillar.eyebrow} headline={pillar.headline} subheadline={pillar.subheadline} ctas={[
        { label: pillar.ctaPrimary.label, to: pillar.ctaPrimary.to, variant: 'primary' },
        { label: pillar.ctaSecondary.label, to: pillar.ctaSecondary.to, variant: 'outline' },
      ]} />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Overview" title={pillar.name} />
              {pillar.positioningLine && <p className="pill" style={{ marginBottom: 16, display: 'inline-block' }}>{pillar.positioningLine}</p>}
              {pillar.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {pillar.whySection && (
              <div className="note-panel">
                <h3>{pillar.whySection.heading}</h3>
                <p>{pillar.whySection.copy}</p>
                {pillar.whySection.philosophy && (
                  <p style={{ fontWeight: 700, color: 'var(--navy-800)', marginBottom: 0 }}>{pillar.whySection.philosophy}</p>
                )}
              </div>
            )}
            {pillar.notExam && (
              <div className="note-panel">
                <h3>{pillar.notExam.heading}</h3>
                <p style={{ marginBottom: 0 }}>{pillar.notExam.copy}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {pillar.tagList && (
        <section className="section section--offwhite">
          <div className="container">
            <SectionHeading eyebrow="Explore" title={pillar.tagListHeading} align="center" />
            <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
              {pillar.tagList.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {pillar.stages && (
        <section className="section" id="stages">
          <div className="container">
            <SectionHeading eyebrow="How It Works" title={pillar.stagesHeading || 'The Journey'} align="center" />
            <div className="stage-grid">
              {pillar.stages.map((stage, i) => (
                <div className="stage-block" key={stage.title}>
                  <span className="stage-block__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="stage-block__title">{stage.title}</h3>
                  {stage.body && <p className="stage-block__body">{stage.body}</p>}
                  {stage.quote && <p className="stage-block__quote">“{stage.quote}”</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pillar.cards && (
        <section className="section section--offwhite" id={pillar.cardsId}>
          <div className="container">
            <SectionHeading eyebrow="What's Inside" title={pillar.cardsHeading} align="center" />
            <CardGrid items={pillar.cards} columns={pillar.cards.length > 6 ? 4 : 3} />
          </div>
        </section>
      )}

      {pillar.flow && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Structure" title={pillar.flowHeading} align="center" />
            <JourneySteps steps={pillar.flow} />
          </div>
        </section>
      )}

      {pillar.designedFor && (
        <section className="section section--offwhite">
          <div className="container">
            <SectionHeading eyebrow="Who It's For" title="Designed for Every Stage" align="center" />
            <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
              {pillar.designedFor.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {pillar.whoCanBenefit && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Who Benefits" title="Built for Every Stage of the Journey" align="center" />
            <ul className="check-list grid grid-2">
              {pillar.whoCanBenefit.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {pillar.ecosystemLink && (
        <section className="section section--offwhite">
          <div className="container">
            <SectionHeading eyebrow="Connected to the Ecosystem" title="How This Pillar Fits" align="center" />
            <div className="ecosystem-link-list">
              {pillar.ecosystemLink.map((item) => (
                <div className="ecosystem-link-list__item" key={item.q}>
                  <span className="ecosystem-link-list__q">{item.q}</span>
                  <span className="ecosystem-link-list__a">{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pillar.note && (
        <section className="section">
          <div className="container">
            <div className="note-panel">
              <h3>{pillar.note.heading}</h3>
              <p style={{ marginBottom: 0 }}>{pillar.note.copy}</p>
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Next Step"
        heading={pillar.closing.heading}
        copy={pillar.closing.copy}
        ctas={pillar.closing.ctas}
      />

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Continue Exploring</span>
          <h3>
            <Link to={`/pillars/${next.slug}`} style={{ color: 'var(--navy-800)' }}>
              Next: {next.name} →
            </Link>
          </h3>
        </div>
      </section>
    </>
  )
}
