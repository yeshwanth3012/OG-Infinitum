import { Link } from 'react-router-dom'

export default function CTASection({ eyebrow, heading, copy, ctas = [] }) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{heading}</h2>
        {copy && <p>{copy}</p>}
        {ctas.length > 0 && (
          <div className="hero__ctas">
            {ctas.map((cta, i) => (
              <Link key={cta.label} to={cta.to || '/contact'} className={`btn ${i === 0 ? 'btn-primary' : 'btn-outline'}`}>
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
