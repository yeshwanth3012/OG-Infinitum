export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
