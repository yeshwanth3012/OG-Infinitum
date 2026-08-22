import { Link } from 'react-router-dom'

/**
 * Generic page hero. `variant` controls background: 'navy' (default) or 'light'.
 */
export default function Hero({ eyebrow, headline, subheadline, ctas = [], variant = 'navy', size = 'lg' }) {
  return (
    <section className={`hero hero--${variant} hero--${size}`}>
      <div className="container hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="hero__headline">{headline}</h1>
        {subheadline && <p className="hero__subheadline">{subheadline}</p>}
        {ctas.length > 0 && (
          <div className="hero__ctas">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                to={cta.to || '/contact'}
                className={`btn ${cta.variant === 'outline' ? (variant === 'navy' ? 'btn-outline' : 'btn-outline-dark') : cta.variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
