export default function JourneySteps({ steps = [], variant = 'light' }) {
  return (
    <div className={`journey-steps journey-steps--${variant}`}>
      {steps.map((step, i) => (
        <div className="journey-steps__item" key={typeof step === 'string' ? step : step.stage || i}>
          <div className="journey-steps__bubble">{i + 1}</div>
          <div className="journey-steps__label">
            {typeof step === 'string' ? (
              step
            ) : (
              <>
                <strong>{step.stage}</strong>
                {step.pillar && <span>{step.pillar}</span>}
              </>
            )}
          </div>
          {i < steps.length - 1 && <span className="journey-steps__arrow">→</span>}
        </div>
      ))}
    </div>
  )
}
