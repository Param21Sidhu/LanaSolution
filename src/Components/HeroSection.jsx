import { heroContent } from '../content'

export function HeroSection({ lang, onNavigate, renderHtml }) {
  return (
    <section className="hero">
      <div className="hero-pattern" aria-hidden="true"></div>
      <div className="hero-bg" aria-hidden="true">
        <svg className="hero-waves" viewBox="0 0 360 180">
          <path d="M10 56 C64 30, 128 30, 182 56 C236 82, 300 82, 350 56" fill="none" stroke="var(--libya-red)" strokeWidth="6" strokeLinecap="round" />
          <path d="M24 92 C78 66, 142 66, 196 92 C250 118, 314 118, 360 92" fill="none" stroke="var(--libya-black)" strokeWidth="5" strokeLinecap="round" />
          <path d="M38 128 C92 102, 156 102, 210 128 C264 154, 328 154, 372 128" fill="none" stroke="var(--libya-green)" strokeWidth="4.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-tag">{heroContent.tag[lang]}</div>
        <h1 dangerouslySetInnerHTML={renderHtml(heroContent.title)} />
        <p className="hero-desc">{heroContent.description[lang]}</p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary" onClick={(event) => onNavigate(event, '#services')}>
            {heroContent.primaryAction[lang]}
          </a>
          <a href="#about" className="btn-ghost" onClick={(event) => onNavigate(event, '#about')}>
            {heroContent.secondaryAction[lang]}
          </a>
        </div>
        <div className="hero-notes">
          {heroContent.notes.map((note) => (
            <span key={note.en} className="hero-note">
              {note[lang]}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
