import { Link } from 'react-router-dom'
import { footerLinks, brand } from '../data/siteContent.js'
import { pillars } from '../data/pillars.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <div className="site-footer__mark-row">
            <span className="wordmark wordmark--on-navy"><span className="wordmark__og">OG</span>INFINITUM</span>
          </div>
          <p className="site-footer__tagline">{brand.positioning}</p>
          <p className="site-footer__promise">{brand.promise}</p>
        </div>

        <div className="site-footer__col">
          <h4>Ecosystem</h4>
          <ul>
            {pillars.map((p) => (
              <li key={p.slug}>
                <Link to={`/pillars/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Company</h4>
          <ul>
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/partners">Become a Partner</Link></li>
            <li><Link to="/counsellor-network">Join the Counsellor Network</Link></li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} OG Infinitum. All rights reserved.</p>
        <p className="site-footer__fine">
          Admissions, visas, scholarships and placements are subject to the relevant institution, university or authority's own
          criteria and decisions.
        </p>
      </div>
    </footer>
  )
}
