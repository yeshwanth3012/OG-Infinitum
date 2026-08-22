import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '140px 0' }}>
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>404</span>
        <h1>This page hasn't been built yet.</h1>
        <p style={{ maxWidth: 480, margin: '0 auto 28px' }}>
          Let's get you back on track — explore the ecosystem or head home.
        </p>
        <div className="hero__ctas" style={{ justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">Back Home</Link>
          <Link to="/ecosystem" className="btn btn-outline-dark">Explore Ecosystem</Link>
        </div>
      </div>
    </section>
  )
}
