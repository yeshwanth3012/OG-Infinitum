import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { internshipPage } from '../data/siteContent.js'

export default function Internships() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const previous = document.title
    document.title = 'Internships | OG Infinitum'
    return () => {
      document.title = previous
    }
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
      const response = await fetch(`https://formsubmit.co/ajax/${internshipPage.applyEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Internship application — OG Infinitum',
          _template: 'table',
          _captcha: 'false',
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          college: data.college,
          course: data.course,
          city: data.city,
          interest: data.interest,
          resume: data.resume,
          message: data.message,
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === 'false') {
        throw new Error('delivery-failed')
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setError('We could not deliver the form just now. Email your details directly and the team will still receive them.')
    }
  }

  return (
    <>
      <Hero eyebrow="Internships" headline={internshipPage.hero} subheadline={internshipPage.heroSub} size="md" />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title={internshipPage.rolesHeading}
            subtitle="Who can apply for this: college students, and people who want to upskill through a practical approach, including conversion skills."
            align="center"
          />
          <div className="grid grid-3">
            {internshipPage.roles.map((role) => (
              <a key={role} href="#apply" className="card" style={{ textAlign: 'center' }}>
                <h3 className="card__title" style={{ marginBottom: 0 }}>{role}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Internship details" title="What this internship offers" />
          <p style={{ maxWidth: 760 }}>{internshipPage.intro}</p>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {internshipPage.facts.map((fact) => (
              <div className="card" key={fact.label}>
                <p style={{ marginBottom: 6, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--gray-700)' }}>
                  {fact.label}
                </p>
                <p style={{ marginBottom: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--navy-800)' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="The work" title="What interns do" />
            <ul className="check-list">
              {internshipPage.youWill.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Who can apply" title="Eligibility" />
            <ul className="check-list">
              {internshipPage.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container" style={{ maxWidth: 820 }}>
            <SectionHeading eyebrow="Apply" title="Submit your details" subtitle={internshipPage.applyTagline} />
            {status === 'sent' ? (
              <div className="note-panel">
                <h3>Application received</h3>
                <p>
                  Thank you. Your details have been sent to {internshipPage.applyEmail}. The team will contact you if
                  your profile is a fit for the current internship intake.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="intern-name">Full name</label>
                    <input id="intern-name" name="name" type="text" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="intern-email">Email</label>
                    <input id="intern-email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="intern-mobile">Mobile number</label>
                    <input id="intern-mobile" name="mobile" type="tel" required placeholder="10-digit mobile number" />
                  </div>
                  <div>
                    <label htmlFor="intern-city">City</label>
                    <input id="intern-city" name="city" type="text" required placeholder="Your city" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div>
                    <label htmlFor="intern-college">College / University</label>
                    <input id="intern-college" name="college" type="text" required placeholder="Your institution" />
                  </div>
                  <div>
                    <label htmlFor="intern-course">Course and year</label>
                    <input id="intern-course" name="course" type="text" required placeholder="e.g. B.Tech, 3rd year" />
                  </div>
                </div>
                <div>
                  <label htmlFor="intern-interest">Role</label>
                  <select id="intern-interest" name="interest" required defaultValue="">
                    <option value="" disabled>Select a role</option>
                    {internshipPage.interests.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="intern-resume">Resume link</label>
                  <input id="intern-resume" name="resume" type="url" placeholder="https://drive.google.com/..." />
                </div>
                <div>
                  <label htmlFor="intern-message">Why you want this internship</label>
                  <textarea id="intern-message" name="message" rows={4} required placeholder="A short note about your interest and availability" />
                </div>
                {status === 'error' && (
                  <p style={{ margin: 0, color: '#9b2c2c' }}>
                    {error} Write to {internshipPage.applyEmail}.
                  </p>
                )}
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit internship application'}
                </button>
              </form>
            )}
        </div>
      </section>
    </>
  )
}
