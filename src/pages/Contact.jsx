import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contactPage } from '../data/siteContent.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Hero eyebrow="Get Started" headline={contactPage.hero} subheadline={contactPage.heroSub} size="md" />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Career Discovery" title="Start your journey now !!" />
            <p className="contact-prompt">Do you want to discover yourself?</p>
            {submitted ? (
              <div className="note-panel">
                <h3>Thank you!</h3>
                <p style={{ marginBottom: 0 }}>
                  We've received your details and a member of the OG Infinitum team will reach out to guide your next
                  step.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="name">Name<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="name" name="name" type="text" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="class">Class<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="class" name="class" type="text" required placeholder="e.g. Class 11" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="school">School / College<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="school" name="school" type="text" required placeholder="Your institution" />
                  </div>
                  <div>
                    <label htmlFor="city">City<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="city" name="city" type="text" required placeholder="Your city" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="mobile">Mobile Number<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="mobile" name="mobile" type="tel" required placeholder="10-digit mobile number" />
                  </div>
                  <div>
                    <label htmlFor="email">Email<span className="contact-form__req" aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest">I'm interested in<span className="contact-form__req" aria-hidden="true">*</span></label>
                  <select id="interest" name="interest" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {contactPage.ctaLanguage.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Start Your Journey</button>
              </form>
            )}
          </div>

          <div>
            <SectionHeading eyebrow="Quick Links" title="Jump Straight to What You Need" />
            <div className="grid" style={{ gap: 12 }}>
              {contactPage.quickLinks.map((link) => (
                <Link key={link.label} to={link.to} className="card" style={{ padding: '18px 22px' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--navy-800)' }}>
                    {link.label} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
