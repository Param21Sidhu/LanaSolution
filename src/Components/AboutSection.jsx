import { aboutCards, aboutSection, aboutStats } from '../content'

export function AboutSection({ lang, renderHtml }) {
  return (
    <section className="about" id="about">
      <div className="about-bg-wave" aria-hidden="true">
        <svg width="620" viewBox="0 0 620 220" overflow="visible">
          <path d="M0 48 C100 18, 220 18, 320 48 C420 78, 540 78, 640 48" fill="none" stroke="#24180f" strokeWidth="6" strokeLinecap="round" />
          <path d="M40 112 C140 82, 260 82, 360 112 C460 142, 580 142, 680 112" fill="none" stroke="#7a4f2d" strokeWidth="5" strokeLinecap="round" />
          <path d="M80 176 C180 146, 300 146, 400 176 C500 206, 620 206, 720 176" fill="none" stroke="#b98746" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="about-inner">
        <div className="about-left">
          <div className="about-label">{aboutSection.label[lang]}</div>
          <h2 className="about-title" dangerouslySetInnerHTML={renderHtml(aboutSection.title)} />
          <p className="about-lead">{aboutSection.lead[lang]}</p>
          <p className="about-body" dangerouslySetInnerHTML={renderHtml(aboutSection.body)} />
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label.en} className="about-stat">
                <div className="num" dangerouslySetInnerHTML={{ __html: stat.number }} />
                <div className="stat-label">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          {aboutCards.map((card) => (
            <div key={card.title.en} className={`about-card${card.highlight ? ' highlight' : ''}`}>
              <h4>{card.title[lang]}</h4>
              <p>{card.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
