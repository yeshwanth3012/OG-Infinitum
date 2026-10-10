import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PillarCard from '../components/PillarCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { ecosystemPage, home } from '../data/siteContent.js'
import './ecosystem.css'

const STROKE = 14
const HALF = 148
const AMP = 78
const STEPS = 8

function wavePoint(x) {
  return { x, y: -AMP * Math.cos((Math.PI * x) / HALF) }
}

function buildWave() {
  const span = HALF * (STEPS - 1)
  const samples = Array.from({ length: 420 }, (_, i) => wavePoint((span * i) / 419))
  const path = samples.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')

  const labels = Array.from({ length: STEPS }, (_, i) => {
    const above = i % 2 === 0
    return {
      x: i * HALF,
      y: above ? -AMP - STROKE / 2 - 16 : AMP + STROKE / 2 + 16,
      above,
    }
  })

  const xs = [...samples.map((p) => p.x), ...labels.map((p) => p.x)]
  const ys = [...samples.map((p) => p.y), ...labels.map((p) => p.y)]
  const minX = Math.min(...xs) - 96
  const maxX = Math.max(...xs) + 96
  const minY = Math.min(...ys) - 72
  const maxY = Math.max(...ys) + 72

  return {
    path,
    labels,
    view: { x: minX, y: minY, w: maxX - minX, h: maxY - minY },
  }
}

const WAVE = buildWave()

function RoadMark() {
  return <path className="ecosystem-road__band" d={WAVE.path} />
}

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
          <SectionHeading
            eyebrow="The Journey"
            title="Discover → Grow Together"
            align="center"
            subtitle="Eight pillars, one continuous journey."
          />
          <div className="ecosystem-road">
            <div className="ecosystem-road__canvas" style={{ aspectRatio: `${WAVE.view.w} / ${WAVE.view.h}` }}>
              <svg className="ecosystem-road__svg" viewBox={`${WAVE.view.x} ${WAVE.view.y} ${WAVE.view.w} ${WAVE.view.h}`} aria-hidden="true">
                <RoadMark />
              </svg>
              <ol className="ecosystem-road__stops">
                {ecosystemPage.journey.map((step, i) => (
                  <li
                    key={step.pillar}
                    className={`ecosystem-road__stop ${WAVE.labels[i].above ? 'ecosystem-road__stop--above' : 'ecosystem-road__stop--below'}`}
                    style={{
                      '--x': `${((WAVE.labels[i].x - WAVE.view.x) / WAVE.view.w) * 100}%`,
                      '--y': `${((WAVE.labels[i].y - WAVE.view.y) / WAVE.view.h) * 100}%`,
                    }}
                  >
                    <span className="ecosystem-road__stage">{step.stage}</span>
                    <span className="ecosystem-road__pillar">{step.pillar}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
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
