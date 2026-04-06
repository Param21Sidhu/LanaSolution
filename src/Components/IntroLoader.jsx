import { brand } from '../content'

export function IntroLoader({ nameVisible, dividerVisible, hidden }) {
  return (
    <div id="intro" className={hidden ? 'is-hidden' : ''}>
      <div className="intro-mark-wrap">
        <svg className="intro-waves" viewBox="0 0 360 120" aria-hidden="true">
          <path className="iw1 wave-beat" d="M26 32 C78 8, 140 8, 192 32 C244 56, 306 56, 334 32" />
          <path className="iw2 wave-beat" d="M40 58 C92 34, 154 34, 206 58 C258 82, 320 82, 348 58" />
          <path className="iw3 wave-beat" d="M54 84 C106 60, 168 60, 220 84 C272 108, 334 108, 360 84" />
        </svg>
      </div>
      <div id="intro-name" className={nameVisible ? 'show' : ''}>
        <div className={`intro-divider ${dividerVisible ? 'show' : ''}`} id="intro-divider" />
        <div id="intro-wordmark">
          <div className="bname">{brand.name}</div>
          <div className="bsub">{brand.subtitle}</div>
          <div className="barabic arabic-accent">{brand.arabic}</div>
        </div>
      </div>
    </div>
  )
}
