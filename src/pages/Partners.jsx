import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { partnersPage } from '../data/siteContent.js'
import './partners.css'

export default function Partners() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Ecosystem Partners | OG Infinitum'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data._honey) {
      setStatus('sent')
      return
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${partnersPage.applyEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Partnership enquiry. OG Infinitum',
          _template: 'table',
          _captcha: 'false',
          name: data.name,
          organization: data.organization,
          email: data.email,
          mobile: data.mobile,
          city: data.city,
          partnerType: data.partnerType,
          message: data.message,
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === 'false') {
        throw new Error('delivery-failed')
      }
      setStatus('sent')
    } catch {
      setStatus('error')
      setError('We could not send this enquiry just now.')
    }
  }

  return (
    <>
      <Hero
        eyebrow="Ecosystem Partners"
        headline={partnersPage.hero}
        subheadline={partnersPage.heroSub}
        ctas={[{ label: 'Send a Partnership Enquiry', to: '#enquire' }]}
      />

      <section className="section">
        <div className="container partners-lead">
          <p>{partnersPage.intro}</p>
          <SectionHeading eyebrow="Who can partner" title="Institutions and organizations" />
          <ul className="partners-list">
            {partnersPage.whoCanPartner.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <SectionHeading eyebrow="Where we work together" title="Across the learner journey" />
          <ul className="partners-list">
            {partnersPage.supportAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--offwhite" id="enquire">
        <div className="container partners-form">
          <SectionHeading eyebrow="Partnership enquiry" title="Tell us about your organization" align="center" />
          {status === 'sent' ? (
            <div className="note-panel">
              <h3>Thank you</h3>
              <p>
                Your enquiry has been sent to {partnersPage.applyEmail}. The team will reply with the next step.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
              <div className="contact-form__row">
                <div>
                  <label htmlFor="partner-name">Your name</label>
                  <input id="partner-name" name="name" type="text" required placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="partner-org">Organization</label>
                  <input id="partner-org" name="organization" type="text" required placeholder="School, college, or company" />
                </div>
              </div>
              <div className="contact-form__row">
                <div>
                  <label htmlFor="partner-email">Email</label>
                  <input id="partner-email" name="email" type="email" required placeholder="you@organization.com" />
                </div>
                <div>
                  <label htmlFor="partner-mobile">Mobile number</label>
                  <input id="partner-mobile" name="mobile" type="tel" required placeholder="10-digit mobile number" />
                </div>
              </div>
              <div className="contact-form__row">
                <div>
                  <label htmlFor="partner-city">City</label>
                  <input id="partner-city" name="city" type="text" required placeholder="City" />
                </div>
                <div>
                  <label htmlFor="partner-type">Partner type</label>
                  <select id="partner-type" name="partnerType" required defaultValue="">
                    <option value="" disabled>Select a type</option>
                    {partnersPage.whoCanPartner.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="partner-message">How would you like to partner?</label>
                <textarea id="partner-message" name="message" rows={5} required placeholder="A short note about the partnership you have in mind" />
              </div>
              {status === 'error' && (
                <p className="partners-form__error">
                  {error} Write to {partnersPage.applyEmail}.
                </p>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send partnership enquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
