import { BrandMark } from './BrandMark'
import { brand, navLinks } from '../content'

export function NavBar({ lang, onToggleLanguage, onNavigate, navOpen, setNavOpen }) {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-mark">
          <BrandMark />
        </div>
        <div className="nav-vline"></div>
        <div>
          <div className="nname">{brand.name}</div>
          <div className="nsub">{brand.subtitle}</div>
          <div className="nar arabic-accent">{brand.arabic}</div>
        </div>
      </div>

      <button id="nav-toggle" type="button" onClick={() => setNavOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={navOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(event) => onNavigate(event, link.href)}>
              {link.label[lang]}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button type="button" className="lang-toggle" onClick={onToggleLanguage}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
        <a href="#contact" className="nav-cta" onClick={(event) => onNavigate(event, '#contact')}>
          {lang === 'ar' ? 'ابدأ مشروعك' : 'Start a Project'}
        </a>
      </div>
    </nav>
  )
}
