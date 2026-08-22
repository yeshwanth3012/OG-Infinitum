import Hero from '../components/Hero.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Careers() {
  return (
    <>
      <Hero eyebrow="Careers" headline="Build the Future of Student Development With Us" size="md" variant="light" />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <p>
            OG Infinitum is growing across career discovery, skills, mentorship, certifications, internships,
            placements, global education and parent engagement. If you're driven by purpose-led work that changes how
            students discover and build their futures, we'd love to hear from you.
          </p>
          <p>Open roles will be listed here as they become available. In the meantime, reach out and introduce yourself.</p>
        </div>
      </section>
      <CTASection heading="Interested in Joining the Team?" ctas={[{ label: 'Get in Touch', to: '/contact' }]} />
    </>
  )
}
