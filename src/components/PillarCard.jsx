import { Link } from 'react-router-dom'

export default function PillarCard({ slug, name, tag, body, index }) {
  return (
    <Link to={`/pillars/${slug}`} className="pillar-card">
      <span className="pillar-card__index">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="pillar-card__name">{name}</h3>
      <span className="pill">{tag}</span>
      <p className="pillar-card__body">{body}</p>
      <span className="pillar-card__link">Explore {name} →</span>
    </Link>
  )
}
