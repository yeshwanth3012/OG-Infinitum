import Hero from '../components/Hero.jsx'
import { governance } from '../data/siteContent.js'

export default function Privacy() {
  return (
    <>
      <Hero eyebrow="Legal" headline="Privacy & Governance" size="md" variant="light" />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>
            OG Infinitum is committed to transparent, ethical communication with every learner, parent, partner and
            institution we work with. The principles below guide everything we publish on this site.
          </p>
          <ul className="check-list">
            {governance.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            A full privacy policy, terms of use, cookie policy, and refund/cancellation policy will be published here.
            For any questions about how your data is handled, please reach out via our{' '}
            <a href="/contact" style={{ color: 'var(--navy-800)', fontWeight: 600 }}>Contact page</a>.
          </p>
        </div>
      </section>
    </>
  )
}
