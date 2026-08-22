import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CardGrid from '../components/CardGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import { resourcesPage } from '../data/siteContent.js'

export default function Resources() {
  return (
    <>
      <Hero eyebrow="Resources" headline={resourcesPage.hero} subheadline={resourcesPage.heroSub} />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Resource Types" title="Explore by Category" align="center" />
          <ul className="tag-list" style={{ justifyContent: 'center', display: 'flex' }}>
            {resourcesPage.types.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="For Students" title="Guides & Workbooks" align="center" />
          <CardGrid items={resourcesPage.studentResources.map((t) => ({ title: t, body: 'Read More / Download' }))} columns={4} />
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Career Content" title="Popular Topics" />
            <ul className="check-list">
              {resourcesPage.careerContent.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="For Parents" title="Parent Resources" />
            <ul className="check-list">
              {resourcesPage.parentResources.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--offwhite">
        <div className="container">
          <SectionHeading eyebrow="Upcoming Webinars" title="Join the Conversation" align="center" />
          <CardGrid items={resourcesPage.webinars.map((t) => ({ title: t, body: 'Register' }))} columns={4} />
        </div>
      </section>

      <CTASection heading="Want a Custom Resource for Your School or Team?" ctas={[{ label: 'Get in Touch', to: '/contact' }]} />
    </>
  )
}
