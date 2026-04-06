import { ctaBand } from '../content'


export function CtaBand({ lang, onNavigate, renderHtml }) {
  return (
    <section className="cta-band">
      <h2 dangerouslySetInnerHTML={renderHtml(ctaBand.title)} />
      <a href="#contact" className="btn-white" onClick={(event) => onNavigate(event, '#contact')}>
        {ctaBand.action[lang]}
      </a>
    </section>
  )
}
